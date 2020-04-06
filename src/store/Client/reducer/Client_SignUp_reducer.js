import { Start_Sign_Up,Error_Sign_Up,Success_Sign_Up,Clear_Sign_Up_State } from '../actions/Client_SignUp_actions'
import {SignUpUser } from '../../../moduels/Client/Client_Moduel'

const initialState = {
    user: new SignUpUser(),

    sendingSignUpRequest: false,
    errorSignUpRequest: false,
    successSignUpRequest: false,
    errorMessage:''
}
export default (state = initialState, action) => {
    switch (action.type) {
        case Start_Sign_Up:
            return { ...state, sendingSignUpRequest: true, successSignUpRequest: false, errorSignUpRequest: false , errorMessage:''};
        case Error_Sign_Up:
            return { ...state, sendingSignUpRequest: false, errorSignUpRequest: true ,errorMessage:action.payload};
        case Success_Sign_Up:
            return { ...state, sendingSignUpRequest: false, successSignUpRequest: true, user :{ ...action.payload }, errorMessage:''};
        case Clear_Sign_Up_State:
            return { ...state, sendingSignUpRequest: false, successSignUpRequest: false, errorSignUpRequest: false, errorMessage: '' };
    }
    return state;
}