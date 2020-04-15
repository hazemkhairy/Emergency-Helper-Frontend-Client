import backendAxios from '../../../services/backendAxios'
import {SignInUser} from '../../../moduels/Client/Client_Moduel'


export const Start_Sign_In = 'Start_SIGN_IN';
export const Success_Sign_In = 'Success_SIGN_IN';
export const Error_Sign_In = 'Error_Sign_In';

export const Clear_Sign_In_State = 'Clear_Sign_In_State';


export const signInAction = (user = new SignInUser()) => {

    return (dispatch) => {
        // dispatch request start
        dispatch({ type: Start_Sign_In })
        backendAxios.post('/api/Client/Login',{
            email: user.email,
            password: user.password
        })
            .then(res => {
                dispatch({ type: Success_Sign_In })
            })
            .catch(err => { 
                console.log(err) 
                dispatch({ type: Error_Sign_In})
                 
            }),200

    }

 }
 export const clearSignInStateAction = () => {
    return { type: Clear_Sign_In_State }
} 