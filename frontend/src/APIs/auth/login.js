import api from "../axios";

const login = async (data) => {
    try{
        const response = await api.post(
            'auth/login', 
            data
        );
        return response.data;
    }catch(error){
        throw error;
    }
}

export default Login;