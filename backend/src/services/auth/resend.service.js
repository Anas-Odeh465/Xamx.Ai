import { templatesLoader } from "../../utils/mail/template.loader.utils.js";
import { generateOTP } from "../../utils/Gen/generateOTP.utils.js";
import { sendEmail } from "../../utils/mail/mailer.utils.js";
import prisma from "../../config/prisma.js";

export const resendService = async (email) => {

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(user && !user.profileCompleted){
        return{
            success: false,
            status: 200,
            exist: true,
            verified: true,
            completed: false,
            redirect: "create-account/setup-profile",
            message: "Account already exists, but not completed!"
        };
    }

    if(user){
        return{
            success: false,
            status: 200,
            exist: true,
            verified: true,
            completed: true,
            page: "login/password",
            message: "Account already exists!"
        };
    }

    const verification = await prisma.emailVerification.findUnique({
        where:{
            email
        }
    });

    if(!verification){
        return{
            success: false,
            status: 200,
            exist: false,
            redirect: "/login",
            message: "Verification request not found, please create new account!"
        };
    } 

    if(verification.resendCount >= 5){

        await prisma.emailVerification.delete({
            where:{
                email
            }
        });
        
        return {
            success: false,
            status: 200,
            redirect: "/login",
            message: "Maximum resend limit reached, please create a new account!"
        }
    }

    const now = new Date();
    const timeSinceLastEmail  = now - verification.lastEmailSentAt;

    if(timeSinceLastEmail < 60000){
        return {
            success: false,
            status: 400,
            message: "Please wait before requesting another code!"
        }
    }

    const newDateExpiration = new Date(Date.now() + 10 * 60 * 1000);
    const lastEmailSentAtOTP = new Date();

    const code = generateOTP();
    const html = await templatesLoader('verify.new.account', {OTP_CODE: code});

    await prisma.emailVerification.update({
        where:{
            email
        },

        data:{
            verificationCode: code,
            expiresAt: newDateExpiration,
            lastEmailSentAt: lastEmailSentAtOTP,
            attempts: 0,
            resendCount: {
                increment: 1
            }
        }
    });

    await sendEmail(
        email,
        "Verify your email",
        html
    );

    return{
        success: true,
        status: 200,
        message: "Verification code resent successfully!"
    }
}