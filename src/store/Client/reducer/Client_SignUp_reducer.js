import { Start_Sign_Up, Failed_Sign_Up, Success_Sign_Up } from '../actions/Client_SignUp_actions'

const initialState = {
    token:'',
    signupstarted:false,
    error : false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case Success_Sign_Up:
            return { ...state, ...action.payload };
        case Failed_Sign_Up:
            console.log('in reducer',state.signupstarted)
            return { ...state, signupstarted : false, error : true };
    }
    return state;
}