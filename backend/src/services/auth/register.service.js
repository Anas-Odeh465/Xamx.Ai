import { templatesLoader } from "../../utils/mail/template.loader.utils.js";
import { generateOTP } from "../../utils/Gen/generateOTP.utils.js";
import { sendEmail } from "../../utils/mail/mailer.utils.js";
import { Hashing } from "../../middleware/auth.hash.js";
import prisma from "../../config/prisma.js";

export const registerService = async (email, password) => {

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(user && !user.profileCompleted){
        return{
            exist: true,
            verified: true,
            completed: false,
            redirect: "/create-account/setup-profile",
            message: "User profile not completed!"
        };
    }

    if(user){
        return{
            exist: true,
            verified: true,
            completed: true,
            redirect: "/login/password",
            message: "Email connected already to account!",
        }
    }

    const userNotVerified = await prisma.emailVerification.findUnique({
        where: {
            email
        }
    });

    if(userNotVerified){
        return{
            exist: true,
            verified: false,
            redirect: "/create-account/verify-email",
            title: "Verify your email",
            message: "Account already exists, but not verified!",
        }
    }

    const code = generateOTP();
    const html = await templatesLoader('verify.new.account', {OTP_CODE: code});

    const hashedPassword = await Hashing(password);
    const expiresAt = new Date(
        Date.now() + 10 * 60 * 1000
    );

    await prisma.emailVerification.upsert({
        where: {
            email
        },
        update: {
            hashedPassword,
            verificationCode: code,
            expiresAt,
            lastEmailSentAt: new Date()
        },
        create: {
            email,
            hashedPassword,
            verificationCode: code,
            expiresAt,
            attempts: 0,
            lastEmailSentAt: new Date()
        }
    });

    await sendEmail(email, "Verify your email", html);

    return{
        success: true,
        redirect: "/create-account/verify-email",
        message:"Verification code sent!",
        title: "Enter Verification code"
    };
}