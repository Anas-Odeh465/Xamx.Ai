import { Hashing } from "../../middleware/auth.hash.password.js";
import prisma from "../../config/prisma.js";

export const register = async (req, res) => {

    try{

        const {email, password} = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!user){

            const hashed_pass = await Hashing(password);

            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: hashed_pass
                }
            })

            return res.status(201).json({
                success: true,
                message: "Account registerd successfuly."
            });

        }
        
        else{
            return res.status(409).json({
                success: false,
                message: "Email already exists."
            });
        }
        
    }catch(error){

        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}