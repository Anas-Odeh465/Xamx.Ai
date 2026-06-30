import { z } from "zod";

const registrationSchema = z.object({  

    email: z.string().email("Please enter a valid email!").max(255, "The email is too long!"),

    finalPassword: z.string()
    .min(8, 'Password must be at least 8 characters!')
    .max(128, 'Password is too long and cannot be processed!')
    .regex(/^(?!.*\s)/, "Password must not contain spaces!")
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, "Password must contain uppercase, lowercase, number and special character!")
});

export const validateRegister = (req, res, next) => {
    const registration = registrationSchema.safeParse(req.body);

    if(!registration.success){
        return res.status(400).json({
            success: false,
            message: registration.error.issues[0].message
        });
    }

    registration.data.email = registration.data.email.trim().toLowerCase();
    registration.data.finalPassword = registration.data.finalPassword.trim();

    req.body = registration.data;

    next();
}