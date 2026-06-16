import prisma from "../../config/prisma.js";
import { sendEmail } from "../../services/auth/register.mail.js";

export const checkEmail = async (req, res) => {

    try{

        const {email} = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        await sendEmail(
                "anas.odeh.per@gmail.com",
                "Xamx AI Test",
                `
                <h1>Hello Anas 🚀</h1>
                <p>Brevo is working.</p>
                `
            );

        return res.status(200).json({
            exist: !!user
        });

    }catch(error){

        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });

    }
}