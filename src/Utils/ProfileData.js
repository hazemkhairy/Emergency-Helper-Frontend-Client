import backendAxios from "../services/backendAxios";

export const getProfileData = async () => {
    let res = await backendAxios
        .get("api/Client")
        .then((res) => {
            return res.data.payload
        })
        .catch((error) => {
            return error;
        });
    return res;
};