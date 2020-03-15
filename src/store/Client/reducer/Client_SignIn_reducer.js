import { Start_Sign_In, Failed_Sign_In, Success_Sign_In } from '../actions/Client_SignIn_actions'


const initialState = {
    token:'',
    signinStarted:false,
    error : false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Start_Sign_In:
            return { ...state, signinStarted : true };
        case Success_Sign_In:
            return { ...state, token : action.payload.token, signinStarted : false };
        case Failed_Sign_In:
            console.log('in reducer',state.signinStarted)
            return { ...state, signinStarted : false, error : true };
    }
    return state;
}