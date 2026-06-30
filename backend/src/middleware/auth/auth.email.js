import { z } from "zod";

const emailSchema = z.object({
    email: z.string().email("Please enter a vaild email!").max(255, "The email is too long!"),
});

export const validateEmail = (req, res, next) => {
    const email = emailSchema.safeParse(req.body);

    if(!email.success){
        return res.status(400).json({
            success: false,
            message: email.error.issues[0].message
        });
    }

    req.body.email = email.data.email.trim().toLowerCase();

    next();
}