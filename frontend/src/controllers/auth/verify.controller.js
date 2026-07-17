import verify from "../../apis/auth/verify";

export const handleCheckCode = async ({e, setError, setSubmitCheck, inputsRef, otpInput, email, navigate, setOtpInput, exist}) => {
    e.preventDefault();
    try{
        setError("");
        setSubmitCheck(true);

        const otp = otpInput.map(num => num.trim()).join("");

        if(inputsRef.current[5]) inputsRef.current[5].blur();

        const result = await verify({
            email,
            otp
        });

        if(result?.redirect){
            navigate(
                result?.redirect || "/login",
                {
                    state: {
                        email,
                        exist
                    }
                }
            )
        }

        else{
            setError("No page to redirect to. Please try again.");
        }

    }catch(error){
        setOtpInput(new Array(6).fill(""));
        setTimeout(() => {
            if (inputsRef.current[0]) {
                inputsRef.current[0].focus();
            }
        }, 1);
        setError(error?.response?.data?.message || "Something went wrong. Please try again.");
    }finally{
        setSubmitCheck(false); 
    }
}