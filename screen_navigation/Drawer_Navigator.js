import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Login from "../screens/Login";
import Home_Navigate from "./Home_Navigate";
import Style from "./drawer_utils/Drawer_styling";

// const drawer = createDrawerNavigator();

// function slide(){
//   return(
//     <drawer.Navigator>
//       <drawer.Screen name="Home" component={Home_Navigate} />
//       <drawer.Screen name="Login" component={Login} />
//       </drawer.Navigator>
//   );
// }

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
    contentComponent: Style,
  }
);
export default createAppContainer(drawer);
