import access from "../../apis/auth/email.js";

export const handleAuthNavigation = async ({navigate, email, setIsLoading, setError}) => {
    try{
        setIsLoading(true);
        setError("");

        const result = await access({
            email
        });

        if(!result?.redirect) return;
        
        navigate(
            result?.redirect,
            {
                state: { 
                    email,
                    exist: result?.exist,
                    verified: result?.verified,
                    title: result?.title || "",
                }
            }
        );
    }catch(error){
       setError(error?.response?.data?.message || "Something went wrong. Please try again.");
    }finally{
        setIsLoading(false);
    }
}