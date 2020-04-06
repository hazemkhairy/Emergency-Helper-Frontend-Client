import {SignUpUser} from '../../../moduels/Client/Client_Moduel'
import backendAxios from '../../../services/backendAxios'
import {setAuthToken } from '../../../Utils/LocalStorage'
;
export const Start_Sign_Up = 'Start_Sign_UP';
export const Success_Sign_Up = 'Success_SIGN_UP';
export const Error_Sign_Up = 'Error_SIGN_UP';
export const Clear_Sign_Up_State = 'Clear_Sign_UP_State'

export const signUpAction=(user = new SignUpUser() )=>
{
    
    return (dispatch) => {

    dispatch({ type: Start_Sign_Up })
    backendAxios.post('/api/Account/RegisterUser',

    { name:{
        
       firstName: user.firstName,
       lastName: user.lastName,
    },
       mobile:user.phonenumber,
       email:user.email,
       password:user.password,
       userRole:0
    }
    ).then(
        (res) => {
            console.log("Done")
            console.log(res)
            setAuthToken(res.data.token)
            dispatch({ type: Success_Sign_Up })
        }
    )
        .catch(
            (err) => {
                setTimeout(
                    ()=>{
                        console.log(err)
                        dispatch({ type: Error_Sign_Up, payload: err.response.data.message  })

                    },200
                )
                
            }
        )
       

}

}
export const ClearSignUpStateAction = () => {

    return { type: Clear_Sign_Up_State }
}
