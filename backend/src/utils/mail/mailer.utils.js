import { mailTransporter, env } from "../../config/smtp.js";

export const sendEmail = async (to, subject, html) => {
    if(!to || !subject || !html){
        throw new Error("Some of mail fields are missing!");
    }

    const mailOption = {
        from: `${env.EMAIL_FROM}`,
        to,
        subject,
        html
    }

    try{
        const result = await mailTransporter.sendMail(mailOption);
        return result;
    }catch(error){
        throw error;
    }
}