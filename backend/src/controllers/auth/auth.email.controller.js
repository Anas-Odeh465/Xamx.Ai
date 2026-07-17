import { checkEmailService } from "../../services/auth/email.service.js";

export const emailControl = async (req, res) => {
    try{
        const {email} = req.body;
        const result = await checkEmailService(email);

        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json({message: "Something went wrong!"});
    }
}