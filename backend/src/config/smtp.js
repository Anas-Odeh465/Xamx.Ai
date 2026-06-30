import nodemailer from "nodemailer";
import chalk from "chalk";
import "./env.config.js";

const {SMTP_SERVER_HOST, SMTP_PORT, BREVO_SMTP_LOGIN, BREVO_SMTP_PASS_KEY, EMAIL_FROM} = process.env;

export const env = Object.freeze({
    EMAIL_FROM: EMAIL_FROM
});

export const mailTransporter = nodemailer.createTransport(Object.freeze({
    host: SMTP_SERVER_HOST,
    port: Number(SMTP_PORT),
    secure: true,
    auth: {
        user: BREVO_SMTP_LOGIN,
        pass: BREVO_SMTP_PASS_KEY
    }
}));

export async function verifySMTP(){
    try {
        await mailTransporter.verify();
        console.log(chalk.green.bold("[SMTP]"), chalk.green("Connected successfully"));
    }catch(error) {
        console.error(chalk.red.bold("[SMTP]"), chalk.red(error?.message));
    }
}
