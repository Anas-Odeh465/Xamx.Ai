import { verifyService } from "../../services/auth/verify.service.js";

export const verifyControl = async (req, res) => {
    try{
        const {email, otp} = req.body;
        if(!email || !otp){
            return res.status(400).json({
                success: false,
                message: "Invalid otp request!"
            });
        }

        const result = await verifyService(email, otp);
        return res.status(result.status || 400).json(result);

    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}