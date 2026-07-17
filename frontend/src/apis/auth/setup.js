import api from "../axios";

const setup = async (data) => {
    const response = await api.post(
        "auth/setup-profile",
        data
    )
    return response.data;
}

export default setup;