import { createSwitchNavigator } from 'react-navigation';

import Home from '../screens/Home'
import SignIn from '../screens/Client/authentications/SignInScreen'
import SignUp from '../screens/Client/authentications/SignUpScreen'
import ForgetPasswordScreen from '../screens/Client/authentications/ForgetPasswordScreen';

export default AuthNavigator = createSwitchNavigator(
    {
        Home,
        SignIn,
        SignUp,
        ForgetPasswordScreen,
    }
)