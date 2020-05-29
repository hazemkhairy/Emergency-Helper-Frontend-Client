import backendAxios from "../services/backendAxios";

export const cancelRequest = async (id, feedback) => {
    return await backendAxios.post('api/Request/CancelRequest', { id })
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