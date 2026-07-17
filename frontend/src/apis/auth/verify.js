import api from "../axios";

const verify = async (data) => {
    const response = await api.post(
        "auth/verify-email",
        data
    );
    return response.data;  
}

export default verify;