import { Link } from "react-router-dom";

export default function LoginFooter(){
    return(
        <div className="flex text-xs space-x-2 mt-5 nav-link-font-type">
            <Link to="/terms" className="hover:underline">Terms of Use</Link>
               <span>|</span>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
    );
}