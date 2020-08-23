import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";

import Login from "../screens/Login";
import Contact from "../screens/contact";
import Home_Navigate from "./Home_Navigate";
import Style from "./drawer_utils/Drawer_styling";

const drawer = createDrawerNavigator(
  {
    Home: {
      screen: Home_Navigate,
    },
    Sign_In: {
      screen: Login,
    },
    Contact_Us: {
      screen: Contact,
    },
  },
  {
    initialRouteName: "Home",
    contentComponent: Style,
  }
);
export default createAppContainer(drawer);
