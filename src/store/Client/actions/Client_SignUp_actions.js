import axios from 'axios';
import {SignUpUser} from '../../../moduels/Client/Client_Moduel'

export const Sign_Up='SIGN_UP';
export const Start_Sign_Up = 'Start_SIGN_UP';
export const Success_Sign_UP = 'Success_SIGN_UP';
export const Failed_Sign_UP = 'Failed_SIGN_UP';

const signUpAction=(user = new SignUpUser() )=>
{
    return (dispatch) => {
    // dispatch request start
    dispatch({ type: Start_Sign_Up })
   
        .then(res => {
            console.log(res.data)
            dispatch({ type: Success_Sign_Up })
        })
        .catch(err => { 
            console.log(err) 
            dispatch({ type: Failed_Sign_Up })
             
        })

}

}

