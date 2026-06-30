import { resendService } from "../../services/auth/resend.service.js";

export const resendControl = async (req, res) => {
    try{
        const {email} = req.body;

        if(!email || typeof email !== "string"){
            return res.status(400).json({
                success: false,
                message: "Resend code failed!"
            });
        }

        const result = await resendService(email);

        return res.status(result.status || 400).json({
            success: result.success,
            message: result.message,
        });
        
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}