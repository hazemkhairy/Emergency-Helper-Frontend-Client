import backendAxios from '../services/backendAxios';

export const getLockdownStatus = async () => {
    return await backendAxios.get('/api/client/LockdownStatus')
        .then(
            (res) => {
                return res.data.payload
            }
        )
        .catch(
            err => { throw err }
        )
}
export const confirmHelpStart = async () => {
    return await backendAxios.post('/api/Request/ConfirmHelpStart')
        .then(
            (res) => {
                return res.data.payload
            }
        )
        .catch(
            err => { throw err }
        )
}
export const cancelOffer = async (message) => {
    return await backendAxios.post('/api/Request/RestartRequest', { message })
        .then(
            (res) => {
                return res.data.payload
            }
        )
        .catch(
            err => { throw err }
        )
}
export const getReceiptInfo = async () => {
    return await backendAxios.get('/api/Request/RequestReceipt')
        .then(
            (res) => {
                return res.data.payload
            }
        )
        .catch(
            err => { throw err }
        )
}
export const payReceipt = async () => {
    return await backendAxios.post('/api/Request/ConfirmPayment')
        .then(
            (res) => {
                return res.data.payload
            }
        )
        .catch(
            err => { throw err }
        )
}