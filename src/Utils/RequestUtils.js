import backendAxios from '../services/backendAxios';

export const createRequest = async (description, location, category) => {
    const res = await backendAxios.post('api/request', { description, location, category })
    return res;
}