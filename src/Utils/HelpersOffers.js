import backendAxios from "../services/backendAxios";

export const getOffers = async () => {
    let res = await backendAxios
        .get("api/Request/ViewOffers")
        .then((res) => {
            return (res.data.payload)
        })
        .catch((error) => {
            return error;
        });
    return res;
};

export const acceptOffer= async (offerID) => {
    return await backendAxios.post('api/Request/AcceptOffer',{offerID})
        .then(
            (res) => {
                return res.data;
            }
        )
        .catch(
            (err) => {
                return err.response.data;
            }
        )
}