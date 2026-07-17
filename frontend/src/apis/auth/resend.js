import api from "../axios";

const resend = async (data) => {
    const response = await api.post(
        'auth/verify-resend', 
        data
    );
    return response.data;
}

export default resend;