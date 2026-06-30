import { validateEmail } from "../validators/email-validation/validateEmail"
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useResend = () => {
    const [error, setError] = useState("");
    const [timeLeft, setTimeLeft] = useState(() => {
        const targetTime = localStorage.getItem("otp_target_time");

        if(targetTime){
            const remainingTime = Math.ceil((Number(targetTime) - new Date()) / 1000);
            return remainingTime > 0 ? remainingTime : 0;
        }
    });

    const timerRef = useRef(null);

    const location = useLocation();
    const email = location?.state?.email;

    const startTimer = (targetTimeStamp) => {
        clearInterval(timerRef.current)

        timerRef.current = setInterval(() => {
            const remaining = Math.ceil((Number(targetTimeStamp) - new Date()) / 1000);

            if(remaining <= 0){
                clearInterval(timerRef.current);
                setTimeLeft(0);
                localStorage.removeItem("otp_target_time");
            } else {
                setTimeLeft(remaining);
            }
        }, 1000);
    };

    useEffect(() => {
        const targetTime = localStorage.getItem("otp_target_time");

        if(targetTime){
            const remainingTime = Math.ceil((Number(targetTime) - new Date()) / 1000);
            if(remainingTime){
                startTimer(Number(targetTime));
            } else{
                localStorage.removeItem("otp_target_time");
            }
        }

        return () => clearInterval(timerRef.current);
    }, []);

    const validate = () => {
        const emailCheck = validateEmail(email);
        if(emailCheck.emailError){
            setError(emailCheck.emailError);
            return false;
        }
        return true;
    }

    return {error, setError, timeLeft, setTimeLeft, email, startTimer, validate};
}