import { registerService } from "../../services/auth/register.service.js";

export const registerControl = async (req, res) => {
    try{
        const {email, finalPassword} = req.body;

        if(!email || typeof email !== "string"){
            return res.status(400).json({
                success: false,
                message: "Email required!"
            });
        }

        if(!finalPassword){
            return res.status(400).json({
                success: false,
                message: "Password required!"
            });
        }

        const result = await registerService(email, finalPassword);

        return res.status(200).json(result);
        
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}