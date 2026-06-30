import api from "../axios";

const resend = async (data) => {
    try{
        const response = await api.post(
            'auth/verify-resend', 
            data
        );
        return response.data;
    }catch(error){
        throw error;
    }
}

export default resend;