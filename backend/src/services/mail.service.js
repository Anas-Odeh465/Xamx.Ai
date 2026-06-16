import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER_HOST,
    port: Number(process.env.SMTP_PORT),

    secure: true,

    auth: {
        user: process.env.BREVO_SMTP_LOGIN,
        pass: process.env.BREVO_SMTP_PASS_KEY
    }
});

try {
    await transporter.verify();
    console.log("SMTP Connected");
} catch (error) {
    console.error(error);
}
