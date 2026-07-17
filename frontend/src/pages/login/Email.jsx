import { handleAuthNavigation } from "../../controllers/auth/email.controller.js";
import { useCheckEmail } from "../../hooks/auth/email.js";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import LoginFooter from "../../ui/LoginFooter.jsx";
import { useNavigate } from "react-router-dom";
import { InfoIcon, Loader} from "lucide-react";
import { LogoBlack } from "../../ui/Logo.jsx";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Email(){
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { email, error, setError, handleChange, validate } = useCheckEmail();

    const handleContinue = async () => {
        if(isLoading) return;
        if(!validate()) return;
        
        await handleAuthNavigation({navigate, email, setIsLoading, setError});
    }

    useEffect(() => {
        document.title = "Xamx.Ai - Login or Create account";
    }, []);

    return(
        <div className="mx-0">
            <div className="w-full">
                <div className="px-5 w-fit" onDragStart={(e) => e.preventDefault()}>
                    <LogoBlack />
                </div>
                <div className="flex flex-col justify-center items-center w-full lg:h-[80vh] h-full">
                    <div className="nav-link-font-type text-gray-700">
                        <div className="flex flex-col justify-center items-center gap-5 py-10  lg:p-0 p-4">
                            <div className="space-y-4">
                                <h1 className="text-3xl max-w-md">Get started with Xamx AI.</h1>
                                <p className="text-x">Login Or create new account</p>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <input disabled={isLoading} maxLength={255} autoFocus type="email" value={email} onKeyDown={(e) => e.key === "Enter" ? handleContinue() : null} onChange={handleChange} placeholder="Email Address" className={`outline-none border ${isLoading ? "cursor-not-allowed bg-gray-200" : ""} ${error ? "border-red-400 hover:border-red-500  ring-red-500 placeholder-red-500" : "border-gray-200 hover:border-gray-300  ring-gray-300"} py-3 px-4 w-full focus:ring-1`} />
                                    {error && <span className="flex gap-1 text-xs text-red-500"> <InfoIcon size={14}/>{error}</span>}
                                </div>
                                <button disabled={isLoading} onClick={handleContinue} className={`flex justify-center items-center py-3 px-4 hover:bg-[#3a3737] ${isLoading ? "bg-[#3a3737] cursor-not-allowed" : "cursor-pointer bg-black"} font-light  text-white w-full`}>
                                        {isLoading ? <Loader className="animate-spin text-white" /> : "Continue"}
                                </button>
                                <div className="relative w-full h-px bg-gray-200 mt-10 mb-4">
                                    <span className="absolute left-1/2 text-xs -top-2 transform -translate-x-1/2 bg-white px-2">Or continue with</span>
                                </div>
                                <div className="flex items-center gap-2 w-full text-sm">
                                    <button disabled={isLoading} className={`flex justify-center items-center p-1.5 border border-gray-200 ${isLoading ? 'cursor-not-allowed bg-gray-100' : 'cursor-pointer hover:bg-gray-100'} gap-2 w-full`}>
                                        <FcGoogle size={22} /> Google
                                    </button>
                                    <button disabled={isLoading} className={`flex justify-center items-center p-1.5 border border-gray-200 ${isLoading ? 'cursor-not-allowed bg-gray-100' : 'cursor-pointer hover:bg-gray-100'} gap-2 w-full`}>
                                        <FaMicrosoft size={22} /> Microsoft
                                    </button>
                                    <button disabled={isLoading} className={`flex justify-center items-center p-1.5 border border-gray-200 ${isLoading ? 'cursor-not-allowed bg-gray-100' : 'cursor-pointer hover:bg-gray-100'} gap-2 w-full`}>
                                        <FaApple size={22} /> Apple
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LoginFooter />
                </div>
            </div>
        </div>
    )
}