import resend from "../../apis/auth/resend";

export const handleResend = async ({e, setError, setTimeLeft, email, startTimer, navigate}) => {
    e.preventDefault();
    try{
        const result = await resend({email});

        if(result?.success){
            // sixtySecondFromNow -> ssfn
            const ssfn = Date.now() + 60 * 1000;
            localStorage.setItem("otp_target_time", ssfn.toString());
            setTimeLeft(60);
            startTimer(ssfn);
            setError("");
        }
        
        if(result?.redirect){
            setError(result?.message || "Something went wrong.");
            setTimeout(() => {
                navigate(result.redirect, {state: {email}});
            }, 2000);
        }

    }catch(error){
        setError(error?.response?.data?.message || "Something went wrong.");
    }
}