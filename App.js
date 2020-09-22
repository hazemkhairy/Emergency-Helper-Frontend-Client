import { Provider } from 'react-redux';
import React, { useState } from 'react'
import store from './src/store/index';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainNavigator from './src/navigation/MainNavigator'
import * as Font from "expo-font";
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    Montserrat_bold: require("./assets/fonts/Montserrat-Bold.ttf")
  });
}



const App = createAppContainer(MainNavigator);

export default () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}