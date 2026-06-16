import { useNavigate, useLocation } from "react-router-dom";
import { validate_inputs } from "../../Hooks/Login/ValidatInputs.js";
import authEmail from "../../APIs/auth/email.auth.js";
import { useState } from "react";

export default function AccessLoginAndRegister(){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    
    let emailEdit = location.state?.email;
    const [email, setEmail] = useState(emailEdit || "");

    const handleChange = (e) => {
        setError("");
        setEmail(e.target.value);
    }

    const handleContinue = async () => {
        
        if(isLoading) return;

        const errors = validate_inputs(email);
        setError(errors.email_error);

        try{
            if(!errors.email_error){
                setIsLoading(true);
                const result = await authEmail({
                    email
                });

                const exists = result?.exist;

                if(exists){
                    navigate(
                        "/login/password",
                        {
                            state: { 
                                email,
                                exists,
                            }
                        }
                    );

                }
                else{
                    navigate(
                        "/create-account/password",
                        {
                            state: { 
                                email,
                                exists,
                            }
                        }
                    );

                }
              console.log(result);
            }
        }catch(error){
            console.log(error);
                setError(error?.response?.data?.message || "Something went wrong")
        }finally{
            setIsLoading(false);
        }
    }

    return {isLoading, error, email, handleContinue, handleChange}
}