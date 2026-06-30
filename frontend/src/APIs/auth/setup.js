import api from "../axios";

const setup = async (data) => {
    try{
        const response = await api.post(
            "auth/setup-profile",
            data
        )
        return response.data;
    }catch(error){
        throw error;  
    }
}

export default setup;