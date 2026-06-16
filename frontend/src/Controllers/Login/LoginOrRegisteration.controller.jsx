import { validate_input_password } from "../../Hooks/Login/ValidatInputs";
import { useNavigate, useLocation } from "react-router-dom";
import register from "../../APIs/auth/register.auth";
import { useState } from "react";

export default function LogIntoOrRegisteration(){
    
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    
    const email = location.state?.email;
    const pageType = location.state?.exists;

    const navigate = useNavigate();

    const [title] = useState(
        pageType ? 'Login' : 'Create account'
    );

    console.log("pageType:", pageType);

    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    }

    const handleChange = (e) => {
        setPassword(e.target.value);
        setError("");
    }

    const handleAccess = async () => {
        
        if(isSubmitting) return;

        const errors = validate_input_password(password, pageType);
        setError(errors.password_error);

        try{
            if(!errors.password_error){
                setIsSubmitting(true)

                const result = await register({
                    email,
                    password
                })

                if(result?.success){
                    navigate(
                        '/test/page-test',
                        {
                            state: {
                                email,
                                pageType: 'Account success'
                            }
                        }
                    );
                }

                alert("Something went wrong")
            }
        }catch(error){
            console.log(error)
            setError(error?.response?.data?.message || "Something went wrong")
        }finally{
            setIsSubmitting(false);
        }
    }

    const handleEdit = () => {
        navigate(
            '/login',
            {
                state: {
                    email
                }
            }
        );
    }

    return {showPassword, isSubmitting, email, title, password, error, handleShowPassword, handleChange, handleAccess, handleEdit};
}