import { validateEmail } from "../validators/email-validation/validateEmail.js";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const useCheckEmail = () => {
    const [error, setError] = useState("");
    const location = useLocation();
    
    const editedEmail = location.state?.email || "";
    const [email, setEmail] = useState(editedEmail);

    const handleChange = (e) => {
        setEmail(e.target.value);
        if(error) setError("");
    }

    const validate = () => {
        const validation = validateEmail(email);
        if(validation.emailError){
            setError(validation.emailError);
            return false;
        }
        return true;
    }

    return { email, error, setError, handleChange, validate };
}