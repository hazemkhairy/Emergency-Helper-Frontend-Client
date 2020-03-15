import axios from 'axios'
import types from './types'
export const getData = () => {
    return (dispatch) => {
        //dispatch pending
        console.log('s')
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => { console.log(res); return res.data })
            .then(data => {
                dispatch({ type: types.DATA_LOADED, payload: data })
            })
    };
}