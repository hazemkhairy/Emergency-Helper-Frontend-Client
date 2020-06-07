import backendAxios from "../services/backendAxios";

export const getOffers = async () => {
    let res = await backendAxios
        .get("api/Request/ViewOffers")
        .then((res) => {
            return (res.data.payload.offers)
        })
        .catch((error) => {
            return error;
        });
    return res;
};