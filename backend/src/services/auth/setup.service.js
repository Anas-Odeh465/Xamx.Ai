import { templatesLoader } from "../../utils/mail/template.loader.utils.js"
import { sendEmail } from "../../utils/mail/mailer.utils.js";
import prisma from "../../config/prisma.js";

export const setupService = async (email, name, age) =>{

    const userNotVerified = await prisma.emailVerification.findUnique({
        where: {
            email
        }
    });

    if(userNotVerified){
        return{
            success: false,
            status: 200,
            exist: false,
            verified: false,
            completed: false,
            redirect: "create-account/password",
            message: "Account not verified or not exists!"
        }
    }

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(!user){
        return{
            success: false,
            status: 400,
            exist: false,
            redirect: "login/password",
            message: "Account not found!"
        }
    }

    if(user.profileCompleted){
        return{
            success: false,
            status: 200,
            exist: true,
            verified: true,
            completed: true,
            redirect: "login/password",
            message: "Account already completed!"
        }
    }

    await prisma.user.update({
        where: {
            email
        },

        data:{
            name: name,
            age: Number(age),
            profileCompleted: true
        }
    });

    const html = await templatesLoader('mail.new.account');

    await sendEmail(email, "Your account created successfully!", html);

    return{
        success: true,
        status: 200,
        exist: true,
        verified: true,
        completed: true,
        redirect: "/dashboard",
        message: "Account completed Successfully!"
    }
}