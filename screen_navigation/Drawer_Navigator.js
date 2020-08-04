import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from "../screens/Home";
import Login from "../screens/Login";

var drawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
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
