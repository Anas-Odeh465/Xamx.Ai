import api from "../axios";

const verify = async (data) => {
    try{
        const response = await api.post(
            "auth/verify-email",
            data
        );
        return response.data;
    }catch(error){
        throw error;
    }   
}

export default verify;