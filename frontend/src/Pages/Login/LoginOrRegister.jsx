import { InfoIcon, Loader, EditIcon, EyeIcon, EyeClosedIcon} from "lucide-react"
import LogIntoOrRegisteration from "../../Controllers/Login/LoginOrRegisteration.controller";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LogoBlack } from "../../UI/Logo";

export default function LoginOrRegister(){

    const {title, email, showPassword, isSubmitting, password, error, handleShowPassword, handleChange, handleAccess, handleEdit} = LogIntoOrRegisteration();

    const navigate = useNavigate();

    useEffect(() => {
        if(!email){
            navigate("/login");
        }
    }, [email, navigate]);

    return(
        <div className="mx-0">
            <div className="w-full">
                <div className="p-5" onDragStart={(e) => e.preventDefault()}>
                    <LogoBlack />
                </div>
                <div className="flex flex-col justify-center items-center w-full lg:h-[80vh] h-full">
                    <div className="nav-link-font-type text-gray-700">
                        <div className="flex flex-col justify-center items-center gap-5 py-10  lg:p-0 p-4">
                            <div className="space-y-4">
                                <h1 className="text-3xl max-w-md">{title},</h1>
                                <h3 className="text-3xl max-w-md">Enter your password.</h3>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center w-full">
                                <div className="flex items-center w-full border border-gray-200 py-3 px-4 ">
                                    <input readOnly type="email" value={email} className={`outline-none w-full`} />
                                    <div className="relative group">
                                        <button onClick={handleEdit} className="hover:bg-gray-100 p-1 cursor-pointer"><EditIcon size={18}/></button>
                                        <span className="absolute top-0 left-1/2 translate-x-10 group-hover:opacity-100 pointer-events-none opacity-0 bg-black py-1.5 px-3 text-xs text-white">Edit</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <div  className={`flex items-center gap-2  py-3 px-4  w-full focus:ring-1 border ${error ? "border-red-400 hover:border-red-500  ring-red-500 placeholder-red-500" : "border-gray-200 hover:border-gray-300  ring-gray-300"}`}>
                                        <input autoFocus type={showPassword ? "text" : "password"} value={password} onKeyDown={(e) => e.key === "Enter" ? handleAccess() : null} onChange={handleChange} placeholder="Password" className={`outline-none w-full `} />
                                        <div className="relative group/pass">
                                            <button onClick={handleShowPassword} className="hover:bg-gray-100 p-1 cursor-pointer">{showPassword ? <EyeClosedIcon size={18}/> : <EyeIcon size={18}/>}</button>
                                            <span className="absolute top-0 left-1/2 translate-x-10 group-hover/pass:opacity-100 pointer-events-none opacity-0 bg-black py-1.5 px-3 text-nowrap text-xs text-white">{showPassword ? "Hide password" : "Show password"}</span>
                                        </div>
                                    </div>
                                    {error && <span className="flex gap-1 text-xs text-red-500 max-w-xs"> <InfoIcon size={14}/>{error}</span>}
                                </div>
                                <button disabled={isSubmitting} onClick={handleAccess} className={`flex justify-center items-center py-3 px-4 hover:bg-[#3a3737] ${isSubmitting ? "bg-[#3a3737] cursor-not-allowed" : "cursor-pointer bg-black"} font-light  text-white w-full`}>
                                        {isSubmitting ? <Loader className="animate-spin text-white" /> : "Login"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex text-xs space-x-4 mt-10 nav-link-font-type">
                        <Link to="/terms">Terms of Use</Link>
                        <span>|</span>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}