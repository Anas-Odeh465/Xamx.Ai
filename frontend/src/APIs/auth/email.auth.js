import api from "../axios.js";

const Access = async (data) => {
    const response = await api.post(
        'auth/check-email',
        data
    );

    return response.data;
}

export default Access;