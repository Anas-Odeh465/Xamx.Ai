import { handleSubmit } from "../../controllers/auth/setup.controller.js";
import { useSetup } from "../../hooks/auth/setup.js";
import { InfoIcon, Loader } from "lucide-react";
import LoginFooter from "../../ui/LoginFooter.jsx";
import { LogoBlack } from "../../ui/Logo.jsx";
import { useEffect } from "react";

export default function SetupProfile(){

    const {isSubmitting, setIsSubmitting, errors, setErrors, data, navigate, ageRef, email, handleChange, validateInputs} = useSetup();

    const submit = async (e) => {
        if(isSubmitting) return;
        if(!validateInputs()) return;

        const payload = {
            ...data,
            email: email
        };

        await handleSubmit({e, setIsSubmitting, payload, setErrors, navigate});
    }

    const handleEnter = (e) => {
        if(e.key === "Enter" && e.target.name === "name"){
            ageRef.current.focus();
        }else if(e.key === "Enter" && e.target.name === "age"){
            ageRef.current.blur();
            submit(e);
        }
    }

    useEffect(() => {
        if(!email){
            navigate('/login', {replace: true})
        }
    }, [email, navigate]);

    useEffect(() => {
        document.title = "Xamx.Ai - Complete your profile";
    }, []);

    return(
        <div className="mx-0 overflow-hidden">
            <div className="w-full">
                <div className="px-5 w-fit" onDragStart={(e) => e.preventDefault()}>
                    <LogoBlack />
                </div>
                <div className="flex flex-col justify-center items-center w-full lg:h-[80vh] h-full lg:p-0 p-4">
                    <div className="nav-link-font-type text-gray-700 w-full max-w-100">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="space-y-2 w-full max-w-100">
                                <h1 className="text-3xl">Welcome to Xamx Ai</h1>
                                <span className="text-sm  text-wrap text-gray-500">Let's complete your profile to personalize your experience</span>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center w-full" >
                                <div className="w-full">
                                    <input 
                                        autoFocus
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your name"
                                        disabled={isSubmitting}
                                        onChange={handleChange}
                                        onKeyDown={handleEnter}
                                        className={`text-left w-full border ${errors.data || errors.name ? "border-red-500 ring-red-500 text-red-500 placeholder-red-500 focus:ring-1" : "border-gray-200 ring-black focus:ring-1"} ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""} py-3 px-4 outline-none transition-all duration-200 ease-in `} 
                                    />
                                    {errors?.name && <span className="w-full flex gap-1 text-xs text-red-500 max-w-100 mt-2"> <InfoIcon size={14}/>{errors?.name || ""}</span>}
                                </div>
                                <div className="w-full">
                                    <input 
                                        type="text"
                                        name="age"
                                        ref={ageRef}
                                        maxLength={3}
                                        value={data.age}
                                        placeholder="Your age"
                                        disabled={isSubmitting}
                                        onChange={handleChange}
                                        onKeyDown={handleEnter}
                                        className={`text-left w-full border ${errors.data || errors.age ? "border-red-500 ring-red-500 text-red-500 placeholder-red-500 focus:ring-1" : "border-gray-200 ring-black focus:ring-1"} ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""} py-3 px-4 outline-none transition-all duration-200 ease-in`} 
                                    />
                                    {errors?.age && <span className="w-full flex gap-1 text-xs text-red-500 max-w-100 mt-3"> <InfoIcon size={14}/>{errors?.age || ""}</span>}
                                </div>
                            </div>
                            {errors?.data && <span className="w-full flex gap-1 text-xs text-red-500 max-w-100"> <InfoIcon size={14}/>{errors?.data || ""}</span>}
                            <button  onClick={submit} className={`flex justify-center items-center py-3 px-4 hover:bg-[#3a3737] ${isSubmitting ? "bg-[#3a3737] cursor-not-allowed" : "cursor-pointer bg-black"} font-light  text-white w-full`}>
                                {isSubmitting ? <Loader className="animate-spin text-white" /> : "Login"}
                            </button>
                        </div>
                    </div>
                    <LoginFooter />
                </div>
            </div>
        </div>
    );
}