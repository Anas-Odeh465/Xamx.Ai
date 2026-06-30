import api from "../axios.js";

const access = async (data) => {
    try{
        const response = await api.post(
            'auth/check-email',
            data
        );
        return response.data;
    }catch(error){
        throw error;
    }
}

export default access;