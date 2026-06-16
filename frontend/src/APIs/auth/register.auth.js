import api from "../axios";

const register = async (data) => {
    const response = await api.post('auth/register', data);

    return response.data;
}

export default register;