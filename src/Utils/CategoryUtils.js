import backendAxios from '../services/backendAxios'
export const getAllCategories = async () => {

    const ret = await backendAxios.get('api/Helper/AllCategories');
    return ret.data.payload.categories;
}