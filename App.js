import { Provider } from 'react-redux';
import React from 'react'
import store from './src/store/index';

import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import PostsScreen from './src/screens/PostsScreen';
import IndexScreen from './src/screens/IndexScreen';
import Home from './src/screens/Home';
import SignUp from './src/screens/Client/authentications/SignUp';
import SignIn from './src/screens/Client/authentications/SignIn';
import * as Font from "expo-font";

 componentDidMount=()=> {
    Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
    });
  }
const navigator = createAppContainer(
  createSwitchNavigator({
   Index: IndexScreen,
   Posts: PostsScreen,
   Home:Home,
   SignIn:SignIn,
   SignUp:SignUp,
}) )

const App = createAppContainer(navigator);

export default () => 
<Provider store={store}>
  <App />
</Provider>