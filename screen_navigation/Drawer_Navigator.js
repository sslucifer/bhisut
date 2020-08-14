import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Login from "../screens/Login";
import Home_Navigate from "./Home_Navigate";

const drawer = createDrawerNavigator(
  {
    Home: {
      screen: Home_Navigate,
    },
    Sign_In: {
      screen: Login,
    },
  },
  {
    initialRouteName: "Home",
  }
);
export default createAppContainer(drawer);
