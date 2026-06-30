import { handleResend } from "../../controllers/auth/resend.controller";
import { useResend } from "../../hooks/auth/resend";
import { InfoIcon } from "lucide-react";

export default function ResendCode (){
    const {error, setError, timeLeft, setTimeLeft, email, startTimer, validate} = useResend();

    const resend = async (e) => {
        if(timeLeft > 0) return;
        if(!validate()) return;
        
        await handleResend({e, error, setError, timeLeft, setTimeLeft, email, startTimer});
    }

    return(
        <div className="flex flex-col items-center gap-2 w-full max-w-100 my-2">
            <div className="flex items-center gap-2 w-full max-w-100">
                <h1 className="text-sm text-gray-500">Didn't get a code?</h1>
                {timeLeft > 0 ? (
                    <button disabled={timeLeft > 0 ? true : false} className="text-sm text-gray-500 cursor-not-allowed">
                        Resend in <span>{timeLeft}</span>
                    </button>
                ) : (
                    <button onClick={resend} className="text-sm cursor-pointer">Click to resend</button>
                )}
            </div>
            {error && <span className="flex gap-1 text-xs text-red-500 w-full max-w-100"> <InfoIcon size={14}/>{error}</span>}
        </div>
    );
}