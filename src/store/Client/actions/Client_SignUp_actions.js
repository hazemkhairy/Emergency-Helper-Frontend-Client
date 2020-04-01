import {SignUpUser} from '../../../moduels/Client/Client_Moduel'
import backendAxios from '../../../services/backendAxios'

//export const Sign_Up='SIGN_UP';
export const Start_Sign_Up = 'Start_Sign_UP';
export const Success_Sign_Up = 'Success_SIGN_UP';
export const Error_Sign_Up = 'Error_SIGN_UP';

export const signUpAction=(user = new SignUpUser() )=>
{
    
    return (dispatch) => {

    dispatch({ type: Start_Sign_Up })
    backendAxios.post('/api/Account/RegisterUser',

    { 
       firstname: user.firstname,
       lastname: user.lastname,
       phonenumber:user.phonenumber,
       email:user.email,
       password:user.password,
       confirmpassword:user.confirmpassword
    }
    ).then(
        (res) => {
            console.log(res)
            dispatch({ type: Success_Sign_Up })
        }
    )
        .catch(
            (err, x) => {
                console.log(err)
                setTimeout(
                    () => {
                        dispatch({ type: Error_Sign_Up })
                    }, 200
                )
            }
        )
       

}

}

