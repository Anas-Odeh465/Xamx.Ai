import { handleCheckCode } from "../../controllers/auth/verify.controller.js";
import { useVerifyEmail } from "../../hooks/auth/verify.js";
import LoginFooter from "../../ui/LoginFooter.jsx";
import { InfoIcon, Loader } from "lucide-react";
import { LogoBlack } from "../../ui/Logo";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ResendCode from "./Resend";

export default function VerifyEmail (){

    const {otpInput, setOtpInput, submitCheck, setSubmitCheck, error, setError, navigate, inputsRef, email, exist, title, handleChange, handlePasteCode, validateSubmittedCode} = useVerifyEmail();

    useEffect(() => {
        inputsRef.current[0].focus();
    }, [inputsRef]);

    useEffect(() => {
        document.title = "Xamx.Ai - Verify email";
    }, []);

    const handleCheck = async (e) => {
        if(!validateSubmittedCode()) return;
        await handleCheckCode({e, setError, setSubmitCheck, inputsRef, otpInput, email, navigate, setOtpInput, exist});
    }

    const handleKeyDown = (e, index) => {
        if(e.key === "Backspace" && !otpInput[index] && index > 0){
            inputsRef.current[index - 1].focus();
        }
        if(e.key === "Enter" && otpInput[index] && index === 5){
            handleCheck(e);
        }
    }

    return(
        <div className="mx-0 overflow-hidden">
            <div className="w-full">
                <div className="px-5 w-fit" onDragStart={(e) => e.preventDefault()}>
                    <LogoBlack />
                </div>
                <div className="flex flex-col justify-center items-center w-full lg:h-[80vh] h-full">
                    <div className="nav-link-font-type text-gray-700 w-full max-w-100">
                        <div className="flex flex-col justify-center items-center gap-5 py-10  lg:p-0 p-4">
                            <div className="space-y-2 w-full max-w-100">
                                <h1 className="text-3xl">{title || ''}</h1>
                                <span className="text-sm  text-wrap text-gray-500">We've sent a code to {email}</span>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center w-full">
                                <div className="flex justify-center items-center gap-3" onPaste={handlePasteCode}>
                                    {otpInput.map((data, index) => (
                                        <input 
                                            key={index} 
                                            type="text" 
                                            value={data}
                                            disabled={submitCheck}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            ref={(e) => (inputsRef.current[index] = e)}
                                            onChange={(e) => handleChange(e.target, index)}
                                            className={`text-center w-full border border-gray-200 py-3 px-4 outline-none transition-all duration-200 ease-in ${submitCheck ? "bg-gray-100" : "ring-black focus:ring-1 focus:scale-110"} `} 
                                        />
                                    ))}
                                </div>
                                {error && <span className="flex w-full max-w-100 gap-1 pt-2 text-xs text-red-500"> <InfoIcon size={14}/>{error}</span>}
                                <ResendCode />
                                <button disabled={submitCheck} onClick={handleCheck} className={`flex justify-center items-center py-3 px-4 hover:bg-[#3a3737] ${submitCheck ? "bg-[#3a3737] cursor-not-allowed" : "cursor-pointer bg-black"} font-light  text-white w-full`}>
                                    {submitCheck === true ? <Loader className="animate-spin text-white" /> : "Check"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <LoginFooter />
                </div>
            </div>
        </div>
    );
}