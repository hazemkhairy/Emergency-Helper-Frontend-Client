import { combineReducers } from 'redux'
import postsReducer from './Posts/reducer'
import SignInReducer from './Client/reducer/Client_SignIn_reducer'
import SignUpReducer from './Client/reducer/Client_SignUp_reducer'
export default rootReducer = combineReducers({ postsReducer,SignInReducer,SignUpReducer })