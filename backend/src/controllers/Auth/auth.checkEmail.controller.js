import { sendEmail } from "../../services/auth/register.mail.js";
import { generateOTP } from "../../services/otp.service.js";
import prisma from "../../config/prisma.js";
import fs from "fs/promises";

export const checkEmail = async (req, res) => {

    try{

        const {email} = req.body;
        const code = generateOTP();

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        const template = await fs.readFile(
            './src/templates/otp.HTML',
            'utf-8'
        );

        const html = template.replace(
            "{{OTP_CODE}}",
            code
        );

        await sendEmail(
            email,
            "Verify your email",
            html
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