import { Provider } from 'react-redux';
import React from 'react'
import store from './src/store/index';

import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import PostsScreen from './src/screens/PostsScreen';
import IndexScreen from './src/screens/IndexScreen';
// import Home from './src/screens/Home';
// import Register from './src/screens/Register';
// import Login from './src/screens/login';
import Login from './src/screens/Client/LoginScreen'
 componentDidMount=()=> {
    Font.loadAsync({
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    });
  }
const navigator = createAppContainer(
  createStackNavigator({
  //  Index: IndexScreen,
  //  Posts: PostsScreen,
  //  Home:Home,
  //  Login:Login,
  //  Register:Register,
   Login:Login


}) )

const App = createAppContainer(navigator);

export default () => 
<Provider store={store}>
  <App />
</Provider>