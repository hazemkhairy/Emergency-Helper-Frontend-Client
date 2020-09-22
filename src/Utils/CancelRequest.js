import backendAxios from "../services/backendAxios";

export const cancelRequest = async ( feedback) => {
    return await backendAxios.post('api/Client/CancelRequest', {feedback})
        .then(
            (res) => {
                return true;
            }
        )
        .catch(
            (err) => {
                return false;
            }
        )
}