import { z } from "zod";

const verifySchema = z.object({
    email: z.string().email("Please enter a valid email!").max(255, "The email is too long!"),
    otp: z.string()
        .length(6, "Invalid OTP code! It must be exactly 6 digits!")
        .regex(/^\d+$/, "OTP must contain numbers only!")
});

export const validateCode = (req, res, next) => {
    if (typeof req.body.email === "string") {
        req.body.email = req.body.email.trim().toLowerCase();
    }
    if (req.body.otp !== undefined) {
        req.body.otp = String(req.body.otp).trim();
    }

    const verify = verifySchema.safeParse(req.body);

    if (!verify.success) {
        return res.status(400).json({
            success: false,
            message: verify.error.issues[0].message
        });
    }

    next();
};