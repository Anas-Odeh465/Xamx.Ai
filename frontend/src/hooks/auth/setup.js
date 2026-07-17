import { validateSetupProfile } from "../validators/setup-validation/validateSetup";
import { validateEmail } from "../validators/email-validation/validateEmail";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export const useSetup = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        name: "",
        age: ""
    });

    const navigate = useNavigate();
    const ageRef = useRef(null);
    const location = useLocation();
    const email = location?.state?.email || "";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev, [name]: value
        }));
        
        if(errors[name] || errors["data"]){
            setErrors(prev => ({
                ...prev, [name]: "", data: ""
            }));
        }
    }

    const validateInputs = () => {
        const setupErrors = validateSetupProfile(data);

        const emailErrors = validateEmail(email);
        if(emailErrors.emailError){
            setupErrors.data = emailErrors.emailError;
            return false;
        }

        if(Object.keys(setupErrors).length > 0){
            setErrors(setupErrors);
            return false;
        }

        setErrors({});
        return true;
    }

    return {isSubmitting, setIsSubmitting, errors, setErrors, data, navigate, ageRef, email, handleChange, validateInputs};
}