import { validateEmail } from "../validators/email-validation/validateEmail";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export const useVerifyEmail = (handleCheck) => {
    const [otpInput, setOtpInput] = useState(new Array(6).fill(""));
    const [submitCheck, setSubmitCheck] = useState(false);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const inputsRef = useRef([]);

    const {email = "", exist = "", title = ""} = location?.state || {};

    useEffect(() => {
        if(!email) navigate('/login', {replace: true});
    }, [email, navigate]);

    const handleChange = (input, index) =>{
        const value = input.value;
        let newOtp = [...otpInput];

        if(value.includes(" ") || (value !== "" && isNaN(value))) {
            setError("Please enter numbers only");
            return false;
        }

        setError(""); 

        newOtp[index] = value.substring(value.length - 1);
        setOtpInput(newOtp);
        
        if (value && index < 5){
            inputsRef.current[index + 1].focus();
        }
    };

    const handlePasteCode = (e) => {
        e.preventDefault();
        const pastedCode = e.clipboardData.getData("text").trim();

        if(/^\d+$/.test(pastedCode)){
            const pastedOtp = pastedCode.slice(0, 6).split("");
            const newOtp = [...otpInput];

            pastedOtp.forEach((char, index) => {
                if (index < 6) newOtp[index] = char;
            });

            setOtpInput(newOtp);

            const focusIndex = pastedCode.length - 1;
            inputsRef.current[focusIndex].focus();
        }
    }

    const validateSubmittedCode = () => {
        const isEmptyField = otpInput.some(num => num.trim() === "");
        const otp = otpInput.map(num => num.trim()).join("");
        const emailErrors = validateEmail(email);

        if(isEmptyField || otp.length < 6){
            setError("Please enter the full code from left to right");
            return false;
        }

        if (!/^\d{6}$/.test(otp)) {
            setError("Invalid code format. Please enter numbers only.");
            return false;
        }

        if(emailErrors.emailError){
            setError(emailErrors.emailError || "Something went wrong. Please try again.");
            return false;
        }

        return true;
    }

    return {otpInput, setOtpInput, submitCheck, setSubmitCheck, error, setError, navigate, inputsRef, email, exist, title, handleChange, handlePasteCode, validateSubmittedCode};
}