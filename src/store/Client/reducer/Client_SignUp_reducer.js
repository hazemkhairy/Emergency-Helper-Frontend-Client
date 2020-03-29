import { Start_Sign_Up, Failed_Sign_Up, Success_Sign_Up } from '../actions/Client_SignUp_actions'
import {SignUpUser } from '../../../moduels/Client/Client_Moduel'
const initialState = {
    user: new SignUpUser()
}
export default (state = initialState, action) => {
    switch (action.type) {
        case Success_Sign_Up:
            return { ...state, user: { ...action.payload } };
    }
    return state;
}