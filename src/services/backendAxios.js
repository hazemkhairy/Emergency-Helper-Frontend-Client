import axios from 'axios';
import { setAuthToken, getAuthToken } from '../Utils/LocalStorage'
const copy = axios.create({});

copy.interceptors.request.use(
    async (config) => {
        //token ?
        config.baseURL = 'https://emergency-helper.herokuapp.com/';
        let token = await getAuthToken();
        if (token)
            config.headers['Authorization'] = 'Bearer ' +token
        config.headers['Content-Type'] = 'application/json';
        return config
    }
)
copy.interceptors.response.use(
    async (response) => {
        if (response.data&&response.data.token) {
            let res = await setAuthToken(response.data.token)
            let token = await getAuthToken();
        }
        return response;
    }
)

export default copy;