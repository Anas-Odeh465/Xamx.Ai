import { handleAuthRegistration } from "../../controllers/auth/register.controller.js";
import { InfoIcon, Loader, EyeIcon, EyeClosedIcon, EditIcon} from "lucide-react";
import { useRegistration } from "../../hooks/auth/register.js";
import { Link, useNavigate } from "react-router-dom";
import LoginFooter from "../../ui/LoginFooter.jsx";
import { LogoBlack } from "../../ui/Logo";
import { useEffect } from "react";

export default function Register(){

    const {password, isSubmitted, setIsSubmitted, isVisible, confirmPasswordRef, errors, setErrors, email, exist, handleChange, handleIsVisible,  validateDataField, handleEdit} = useRegistration();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        if(isSubmitted) return;
        if(!validateDataField()) return;

        await handleAuthRegistration({e, isSubmitted, setIsSubmitted, email, password, setErrors, navigate, exist});
    }
    
    useEffect(() => {
        if(!email){
            navigate("/login", {replace: true});
        }
    }, [email, navigate]);

    useEffect(() => {
        document.title = `Xamx.Ai - Create account`;
    }, []);

    return(
        <div className="mx-0 overflow-hidden">
            <div className="w-full">
                <div className="px-5 w-fit" onDragStart={(e) => e.preventDefault()}>
                    <LogoBlack />
                </div>
                <div className="flex flex-col justify-center items-center w-full lg:h-[80vh] h-full">
                    <div className="nav-link-font-type text-gray-700 w-full lg:max-w-100">
                        <div className="flex flex-col justify-center items-center gap-5 py-10  lg:p-0 p-4">
                            <div className="space-y-4 w-full lg:max-w-100 max-w-90">
                                <h1 className="text-3xl max-w-md">Create account</h1>
                                <h3 className="text-lg max-w-md">Few steps to begine with what you looking for, enter a strong password.</h3>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center w-full lg:max-w-100 max-w-90">
                                <div className="w-full">
                                    <div className="flex items-center w-full border border-gray-200 py-3 px-4 bg-gray-100">
                                        <input readOnly type="email" name="email" value={email} className={`outline-none w-full text-gray-400 `} />
                                        <div className="relative group text-gray-600 hover:text-black">
                                            <button onClick={handleEdit} className="hover:bg-gray-100 p-1 cursor-pointer"><EditIcon size={18}/></button>
                                            <span className="absolute top-0 left-1/2 translate-x-10 group-hover:opacity-100 pointer-events-none opacity-0 bg-black py-1.5 px-3 text-xs text-white">Edit</span>
                                        </div>
                                    </div>
                                    {errors?.email && <span className="flex gap-1 text-xs text-red-500 mt-2"> <InfoIcon size={14}/>{errors?.email}</span>}
                                </div>
                                <div className="w-full">
                                    <div className={`flex w-full items-center gap-2  py-3 px-4 focus:ring-1 border ${isSubmitted ? "cursor-not-allowed bg-gray-100" : ""} ${errors?.password ? "border-red-400 hover:border-red-500  ring-red-500 placeholder-red-500" : "border-gray-200 hover:border-gray-300 placeholder-gray-500 ring-gray-300"} focus:ring-1`}>
                                        <input 
                                            autoFocus 
                                            name="password"
                                            disabled={isSubmitted} 
                                            placeholder="Password"
                                            onChange={handleChange} 
                                            value={password.password} 
                                            type={isVisible ? "text" : "password"} 
                                            onKeyDown={(e) => {e.key === "Enter" ? confirmPasswordRef?.current?.focus() : ""}} 
                                            className={`outline-none w-full ${isSubmitted ? "cursor-not-allowed" : ""} ${errors?.password ? "placeholder-red-500" : ""}`} 
                                        />
                                        <div className="relative group/pass text-gray-600 hover:text-black">
                                            <button onClick={handleIsVisible} className="hover:bg-gray-100 p-1 cursor-pointer text-gray-600 hover:text-black">{isVisible ? <EyeClosedIcon size={18}/> : <EyeIcon size={18}/>}</button>
                                            <span className="absolute top-0 left-1/2 translate-x-10 group-hover/pass:opacity-100 pointer-events-none opacity-0 bg-black py-1.5 px-3 text-nowrap text-xs text-white">{isVisible ? "Hide password" : "Show password"}</span>
                                        </div>
                                    </div>
                                    {errors?.password && <span className="flex items-center  gap-1 text-xs text-red-500 mt-2"> <InfoIcon size={14}/>{errors?.password}</span>}
                                </div>
                                <div className="w-full">
                                    <div  className={`flex items-center gap-2  py-3 px-4 focus:ring-1 border ${isSubmitted ? "cursor-not-allowed bg-gray-100" : ""} ${errors?.confirm ? "border-red-400 hover:border-red-500  ring-red-500 placeholder-red-500" : "border-gray-200 hover:border-gray-300 placeholder-gray-500 ring-gray-300"} focus:ring-1`}>
                                        <input 
                                            disabled={isSubmitted} 
                                            name="confirm"
                                            onChange={handleChange} 
                                            ref={confirmPasswordRef} 
                                            placeholder="Confirm password" 
                                            value={password.confirmPassword} 
                                            type={isVisible ? "text" : "password"} 
                                            onKeyDown={(e) => {e.key === "Enter" ? (confirmPasswordRef?.current?.blur(), handleSubmit()) : ""}} 
                                            className={`outline-none w-full ${isSubmitted ? "cursor-not-allowed" : ""} ${errors?.confirm ? "placeholder-red-500" : ""}`} 
                                        />
                                    </div>
                                    {errors?.confirm && <span className="flex gap-1 text-xs text-red-500 mt-2"> <InfoIcon size={14}/>{errors?.confirm}</span>}
                                </div>
                                {errors?.server && <span className="flex gap-1 text-xs text-red-500 max-w-100 w-full"> <InfoIcon size={14}/>{errors?.server}</span>}
                                <button disabled={isSubmitted} onClick={handleSubmit} className={`flex justify-center items-center py-3 px-4 hover:bg-[#3a3737] ${isSubmitted ? "bg-[#3a3737] cursor-not-allowed" : "cursor-pointer bg-black"} font-light  text-white w-full`}>
                                        {isSubmitted ? <Loader className="animate-spin text-white" /> : "Create account"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <LoginFooter />
                </div>
            </div>
        </div>
    )
}