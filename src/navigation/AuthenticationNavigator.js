import { createSwitchNavigator } from 'react-navigation';

import Home from '../screens/Home'
import SignIn from '../screens/Client/authentications/SignIn'
import SignUp from '../screens/Client/authentications/SignUp'

export default AuthNavigator = createSwitchNavigator(
    {
        Home,
        SignIn,
        SignUp
    }
)