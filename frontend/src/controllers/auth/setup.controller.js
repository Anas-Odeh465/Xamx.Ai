import setup from "../../apis/auth/setup";

export const handleSubmit = async ({e, setIsSubmitting, payload, setErrors, navigate}) => {
        e.preventDefault();
        try{
            setIsSubmitting(true);
            const result = await setup(payload);

            if(result?.success){
                alert(result?.message || "error");
            };

            alert(result?.message || "error");
            

        }catch(error){
            setErrors({data: error?.response?.data?.message || "Something went wrong. Please try again."})
        }finally{
            setIsSubmitting(false);
        }
    }