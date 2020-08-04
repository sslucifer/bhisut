import React from "react";
import * as SplashScreen from "expo-splash-screen";

import Home_Nav from "./screen_navigation/Home_Navigate";

//Here loading page is refered as splashscreen in react-native.
SplashScreen.preventAutoHideAsync();

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000); // Duration of Loading screen 2000ms and can be changed.
  }

  render() {
    return <Home_Nav />;
  }
}
