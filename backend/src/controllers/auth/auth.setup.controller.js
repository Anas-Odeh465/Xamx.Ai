import { setupService } from "../../services/auth/setup.service.js";

export const setupControl = async (req, res) => {
    try{
        const {email, name, age} = req.body;

        if(!email || !name || !age){
            return res.status(400).json({
                success: false,
                message: "Some of data fields are missing!"
            });
        }

        const result = await setupService(email, name, age);

        return res.status(result.status || 400).json({
            success: result?.success,
            completed: result?.completed,
            redirect: result?.redirect,
            message: result?.message
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}