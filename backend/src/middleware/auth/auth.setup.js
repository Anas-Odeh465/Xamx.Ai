import { z } from "zod";

const setupProfileSchema = z.object({
    email: z.string()
        .email("Please enter a vaild email!")
        .max(255, "The email is too long!"),

    name: z.string()
        .min(3, "Name is too short!")
        .max(38, "Name is too long!")
        .regex(/^[a-zA-Z\s\u0600-\u06FF]+$/, "Name can only contain letters!"),

    age: z.coerce.number()
        .int("Age must be a whole number!")
        .min(6, "Invalid age!")
        .max(120, "Invalid age!")
});

export const validateSetup = (req, res, next) => {
    const result = setupProfileSchema.safeParse(req.body);

    if(!result.success){
        return res.status(400).json({
            success: false,
            message: result.error.issues[0].message
        });
    }

    req.body.email = result.data.email.trim();
    req.body.name = result.data.name.trim();
    req.body.age = result.data.age;

    next();
}