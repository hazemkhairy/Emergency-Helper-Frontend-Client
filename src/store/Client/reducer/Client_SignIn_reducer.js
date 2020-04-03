import { Start_Sign_In,Error_Sign_In,Success_Sign_In } from '../actions/Client_SignIn_actions'

import {SignInUser } from '../../../moduels/Client/Client_Moduel'

const initialState = {
    user: new SignInUser(),
    token:'',
    sendingSignInRequest: false,
    errorSignInRequest: false,
    successSignInRequest: false,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case Start_Sign_In:
            return { ...state, sendingSignInRequest: true, successSignInRequest: false, errorSignInRequest: false };
        case Error_Sign_In:
            return { ...state, sendingSignInRequest: false, errorSignInRequest: true,successSignInRequest: false };
        case Success_Sign_In:
            return { ...state, sendingSignInRequest: false, successSignInRequest: true,user: { ...action.payload }, errorSignInRequest: false };
      
    }
    return state;
}