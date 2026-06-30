import { validatePassword } from "../validators/register-password-validation/validatePassword";
import { validateEmail } from "../validators/email-validation/validateEmail";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export const useRegistration = () => {

    const [password, setPassword] = useState({password: "", confirm: ""});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const confirmPasswordRef = useRef(null);
    const [errors, setErrors] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const {email = "", exist = ""} = location?.state || {};

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPassword(prev => ({
            ...prev, [name]: value
        }));

        if(errors[name] || errors.server){
            setErrors(prev => ({
                ...prev, [name]: "", server: ""
            }));
        }
    }

    const handleIsVisible = () => {
        setIsVisible(prev => !prev);
    }

    const validateDataField = () => {
        const passwordErrors = validatePassword(password);
        const emailErrors = validateEmail(email);

        const allErrors = { ...passwordErrors }

        if(emailErrors.emailError){
            allErrors.email = emailErrors.emailError;
            return false;
        };

        if(Object.keys(allErrors).length > 0){
            setErrors(allErrors);
            return false;
        }

        return true;
    }

    const handleEdit = () => {
        navigate(
            '/login',
            {
                state: { email }
            }
        );
    }

    return {password, isSubmitted, setIsSubmitted, isVisible, confirmPasswordRef, errors, setErrors, email, exist, handleChange, handleIsVisible,  validateDataField, handleEdit};
}