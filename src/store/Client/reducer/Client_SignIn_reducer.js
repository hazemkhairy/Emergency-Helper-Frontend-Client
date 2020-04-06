import { Clear_Sign_In_State, Start_Sign_In,Error_Sign_In,Success_Sign_In } from '../actions/Client_SignIn_actions'

const initialState = {
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
            return { ...state, sendingSignInRequest: false, errorSignInRequest: true,successSignInRequest: false ,message: action.payload.message};
        case Success_Sign_In:
            return { ...state, sendingSignInRequest: false, successSignInRequest: true, errorSignInRequest: false };
        case Clear_Sign_In_State:
            return { ...state, sendingSignInRequest: false, errorSignInRequest: false, successSignInRequest: false, message: '' }
    }
    return state;
}