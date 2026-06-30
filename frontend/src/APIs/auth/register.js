import api from "../axios";

const register = async (data) => {
    try{
        const response = await api.post(
            'auth/register', 
            data
        );
        return response.data;
    }catch(error){
        throw error;
    }
}

export default register;