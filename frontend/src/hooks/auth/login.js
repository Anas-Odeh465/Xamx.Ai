import { validatePassword } from "../validators/login-password-validation/validateLogin";
import { validateEmail } from "../validators/email-validation/validateEmail";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export function useLogin(){
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const location = useLocation();
    const email = location?.state?.email || "";

    const navigate = useNavigate();

    const handleVisibility = () => {
        setIsVisible(prev => !prev);
    }

    const handleChange = (e) => {
        setPassword(e.target.value);

        const emailErrors = validateEmail(email);
        if(emailErrors.emailError){
            setErrors(prev => ({...prev, email: emailErrors.emailError}));
            return false;
        }

        setErrors("");
    }

    const handleEdit = () => {
        navigate(
            '/login',{
                state:{
                    email
                }
            }
        )
    }

    const validate = () => {
        const passwordErrors = validatePassword(password);
        if(passwordErrors.password){
            setErrors(prev => ({...prev, password: passwordErrors.password}));
            return false;
        }
        setErrors("");
        return true;
    }

    const testSubmit = () => {
        if(!validate()) return;
        alert("Login successful");
    }

    return { isVisible, password, errors, setErrors, email, navigate, handleVisibility, handleChange, handleEdit, testSubmit };
}