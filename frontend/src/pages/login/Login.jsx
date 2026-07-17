import { InfoIcon, Loader, EyeIcon, EyeClosedIcon, EditIcon} from "lucide-react";
import { useLogin } from "../../hooks/auth/login.js";
import LoginFooter from "../../ui/LoginFooter.jsx";
import { LogoBlack } from "../../ui/Logo.jsx";
import { useEffect } from "react";

export default function Login(){

    const { isVisible, password, errors, setErrors, email, navigate, handleVisibility, handleChange, handleEdit, testSubmit } = useLogin();

    useEffect(() => {
        if(!email){
            navigate("/login", {replace: true});
        }
    }, [email, navigate]);

    useEffect(() => {
        document.title = `Xamx.Ai - Login`;
    }, []);

    return(
        <div className="mx-0 overflow-hidden">
            <div className="w-full">
                <div className="px-5 w-fit" onDragStart={(e) => e.preventDefault()}>
                    <LogoBlack />
                </div>
                <div className="flex flex-col justify-center items-center w-full lg:h-[80vh] h-full">
                    <div className="nav-link-font-type text-gray-800 w-full lg:max-w-100">
                        <div className="flex flex-col justify-center items-center gap-5 py-10  lg:p-0 p-4">
                            <div className="space-y-4 w-full lg:max-w-100 max-w-90">
                                <h1 className="text-3xl max-w-md">Login</h1>
                                <h3 className="text-lg max-w-md">Enter your password to access your account.</h3>
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
                                    <div className={`flex w-full items-center gap-2  py-3 px-4 focus:ring-1 border 00 border-gray-200 hover:border-gray-300 placeholder-gray-500 ring-gray-300`}>
                                        <input 
                                            autoFocus 
                                            name="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={handleChange}
                                            type={isVisible ? "text" : "password"}
                                            className={`outline-none w-full`} 
                                        />
                                        <div className="relative group/pass text-gray-600 hover:text-black">
                                            <button onClick={handleVisibility} className="hover:bg-gray-100 p-1 cursor-pointer text-gray-600 hover:text-black">{isVisible ? <EyeClosedIcon size={18}/> : <EyeIcon size={18}/>}</button>
                                            <span className="absolute top-0 left-1/2 translate-x-10 group-hover/pass:opacity-100 pointer-events-none opacity-0 bg-black py-1.5 px-3 text-nowrap text-xs text-white">{isVisible ? "Hide password" : "Show password"}</span>
                                        </div>
                                    </div>
                                    {errors?.password && <span className="flex gap-1 text-xs text-red-500 mt-2"> <InfoIcon size={14}/>{errors?.password}</span>}
                                </div>
                                
                                <button onClick={testSubmit} className={`flex justify-center items-center py-3 px-4 hover:bg-[#3a3737] cursor-pointer bg-black font-light  text-white w-full`}>
                                    Login
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