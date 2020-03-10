import { Start_Sign_In, Failed_Sign_In, Success_Sign_In } from './actions'
const initialState = {
    token:'',
    loginStarted:false,
    error : false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Start_Sign_In:
            return { ...state, loginStarted : true };
        case Success_Sign_In:
            return { ...state, token : action.payload.token, loginStarted : false };
        case Failed_Sign_In:
            console.log('in reducer',state.loginStarted)
            return { ...state, loginStarted : false, error : true };
    }
    return state;
}