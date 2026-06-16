import { z } from "zod";

const authSchemaCheckEmail = z.object({
    email: z.email("Please enter a vaild email. ddddd").max(255, "The email is too long."),
})

const authSchemaCheckRegistration = z.object({  

    email: z.email("Please enter a vaild email. ddddd").max(255, "The email is too long."),

    password: z.string()
    .min(8, 'Password must be at least 8 characters.')
    .max(128, 'Password is too long and cannot be processed')
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, "Password must contain uppercase, lowercase, number and special character.")
})

export const VaildateEmail = (req, res, next) => {
    const emailResult = authSchemaCheckEmail.safeParse(req.body);

    if(!emailResult.success){
        return res.status(400).json({
            success: false,
            message: emailResult.error.issues[0].message
        });
    }

    next();
}

export const VaildateRegistration = (req, res, next) => {
    const accountResult = authSchemaCheckRegistration.safeParse(req.body);

    if(!accountResult.success){
        return res.status(400).json({
            success: false,
            message: accountResult.error.issues[0].message
        });
    }

    next();
}