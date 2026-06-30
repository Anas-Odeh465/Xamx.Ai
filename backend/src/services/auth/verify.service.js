import prisma from "../../config/prisma.js";

export const verifyService = async (email, otp) => {

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(user && !user.profileCompleted){
        return{
            status: 200,
            exist: true,
            verified: true,
            completed: false,
            redirect: "/create-account/setup-profile",
            message: "User profile not completed!"
        }
    }

    if(user){
        return{
            status: 200,
            exist: true,
            verified: true,
            completed: true,
            redirect: "/login/password",
            message: "User already exist and verified!"
        }
    }

    const verification = await prisma.emailVerification.findUnique({
        where: {
            email
        }
    });

    if(!verification){
        return {
            status: 400, 
            success: false,
            exist: false,
            redirect: "/login/password",
            message: "Verification request not found!"
        };
    }

    else if(verification.expiresAt < new Date()){
        return {
            status: 400, 
            success: false,
            exist: true,
            message: "Verification code expired!"
        };
    }

    else if(verification.verificationCode !== otp){
        const updateAttempts = verification.attempts + 1;

        if (updateAttempts >= 5){
            await prisma.emailVerification.delete({
                where: {
                    email
                }
            });

            return {
                status: 400, 
                success: false,
                message: "Too many requests. Please register for new account!"
            };
        }

        await prisma.emailVerification.update({
            where: {
                email
            },

            data: {
                attempts:{
                    increment: 1
                }
            }
        })
        return {
            status: 400, 
            success: false,
            message: "Verification code is incorrect!"
        };
    }

    else if(verification.expiresAt > new Date() && verification.verificationCode === otp){
        await prisma.$transaction([
            prisma.user.create({
                data: {
                    email: verification.email,
                    password: verification.hashedPassword,
                    isVerified: true
                }
            }),
            prisma.emailVerification.delete({
                where: {
                    email
                }
            })
        ]);

        return {
            status: 200, 
            success: true,
            redirect: "/create-account/setup-profile",
            message: "Email verified successfully"
        };
    }

    return{
        status: 400,
        success: false,
        message: "Invalid verification request!"
    }
}