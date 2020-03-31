import { Start_Sign_Up,Error_Sign_Up,Success_Sign_Up } from '../actions/Client_SignUp_actions'
import {SignUpUser } from '../../../moduels/Client/Client_Moduel'

const initialState = {
    user: new SignUpUser(),

    sendingSignUpRequest: false,
    errorSignUpRequest: false,
    successSignUpRequest: false,
}
export default (state = initialState, action) => {
    switch (action.type) {
        
        case Start_Sign_Up:
            return { ...state, sendingSignUpRequest: true, successSignUpRequest: false, errorSignUpRequest: false };
        case Error_Sign_Up:
            return { ...state, sendingSignUpRequest: false, errorSignUpRequest: true };
        case Success_Sign_Up:
            return { ...state, sendingSignUpRequest: false, successSignUpRequest: true };
        case Success_Sign_Up:
            return { ...state, user: { ...action.payload } };
    }
    return state;
}