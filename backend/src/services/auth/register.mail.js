import { transporter } from "../mail.service.js";
import dotenv from "dotenv";

dotenv.config();


export const sendEmail = async (to, subject, html) => {
    await transporter.sendMail({
        from: `${process.env.EMAIL_FROM}`,
        to,
        subject,
        html
    })
}