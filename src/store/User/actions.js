import axios from 'axios';
import { SignInUser } from "../../models/User/UserModel";
export const Sign_In = 'SIGN_IN';

export const Start_Sign_In = 'Start_SIGN_IN';
export const Success_Sign_In = 'Success_SIGN_IN';
export const Failed_Sign_In = 'Failed_SIGN_IN';


export const signInAction = (user = new SignInUser()) => {

    return (dispatch) => {
        // dispatch request start
        dispatch({ type: Start_Sign_In })
        axios.post('https://emergency-helper.herokuapp.com/account/login', {
            email: user.email,
            password: user.password
        })
            .then(res => {
                console.log(res.data)
                dispatch({ type: Success_Sign_In, payload:{token:res.data.token}})
            })
            .catch(err => { 
                console.log('ss')
                console.log(err) 
                dispatch({ type: Failed_Sign_In })
                 
            })

    }



    return (dispatch) => {
        //dispatch pending
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => { return res.data })
            .then(data => {
                dispatch({ type: types.DATA_LOADED, payload: data })
            })
    };
}