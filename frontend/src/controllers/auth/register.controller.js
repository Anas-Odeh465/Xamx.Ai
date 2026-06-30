import register from "../../apis/auth/register";

export const handleAuthRegistration = async ({e, isSubmitted, setIsSubmitted, email, password, setErrors, navigate, title, exist}) => {
    if(e) e.preventDefault();
    if(isSubmitted) return;

    try{
        setIsSubmitted(true);

        const result = await register({
            email,
            finalPassword: password.password.trim()
        });

        if(!result?.redirect) setErrors({server: "Something went wrong. Please try again."});

        navigate(
            result?.redirect,
            {
                state: {
                    email,
                    exist: result?.exist,
                    title: result?.title
                }
            }
        );
    }catch(error){
        const serverError = error?.response?.data?.message || "Something went wrong. Please try again.";
        setErrors({server: serverError});
    }finally{
        setIsSubmitted(false);
    }
}
