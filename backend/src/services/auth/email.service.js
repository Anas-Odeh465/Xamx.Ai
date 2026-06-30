import prisma from "../../config/prisma.js";

export const checkEmailService = async (email) => {
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
            message: "User profile not completed!",
        }
    }

    if(user){
        return{
            exist: true,
            verified: true,
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
            message: "User not verified!",
            title: "Verify your account",
            note: "Enter the sent code"
        }
    }

    return{
        exist: false,
        verified: false,
        redirect: "/create-account/password",
        message: "New user!",
    }
}