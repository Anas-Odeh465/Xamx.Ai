import blackLogo from "../../assets/logo/Xamx.Ai - Black.png";
import LoginFooter from "../../ui/LoginFooter";
import { Link } from "react-router-dom";

export default function SessionEnds(){
    return(
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <img src={blackLogo} alt="Xamx.Ai Logo" onDragStart={(e) => e.preventDefault()} className="w-36 h-36 select-none"/>
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-3xl nav-link-font-type">Your session has ended.</h1>
                <h3 className="text-md max-w-xs text-center placeHolder-font-type">Continue on <b>xamxai.com</b> by logging in or using the site without an account.</h3>
                <Link to="/login" className={`placeHolder-font-type flex justify-center items-center py-3 px-4 hover:bg-[#3a3737] cursor-pointer bg-black font-light  text-white w-full lg:max-w-100 max-w-90 mt-5`}>
                    Login
                </Link>
            </div>
            <LoginFooter />
        </div>
    );
}