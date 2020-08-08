//This file is used to implement Navigation between the 5 section/page using Bottom Tab Navigation.
import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screen_navigation/Drawer_Navigator";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import Basket from "../screens/Basket";
import Content from "../screens/Content";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    //Home is a variable name used for navigation.
    Home: {
      screen: Home, //It is referencing to the Home Page.
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          //The name of the icon is 'home' which is imported from @expo/vector-icons/FontAwesome5.
          <View>
            <FontAwesome5 name="home" size={26} color={tintColor} />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "#aeaeae",
        barStyle: { backgroundColor: "#a8701d" },
      },
    },
    //Product is a variable name used for navigation.
    Product: {
      screen: Product, //It is referencing to the LiveTv Page.
      navigationOptions: {
        tabBarLabel: "Product",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialCommunityIcons
              name="food-variant"
              size={26}
              color={tintColor}
            />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "#aeaeae",
        barStyle: { backgroundColor: "#a8701d" },
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: "Cart",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name="shopping-cart" size={26} color={tintColor} />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "#aeaeae",
        barStyle: { backgroundColor: "#a8701d" },
      },
    },
    Basket: {
      screen: Basket,
      navigationOptions: {
        tabBarLabel: "Basket",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Fontisto name="shopping-basket" size={26} color={tintColor} />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "#aeaeae",
        barStyle: { backgroundColor: "#a8701d" },
      },
    },
    Content: {
      screen: Content,
      navigationOptions: {
        tabBarLabel: "Content",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="play-circle" size={26} color={tintColor} />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "#aeaeae",
        barStyle: { backgroundColor: "#a8701d" },
      },
    },
  },
  {
    //Initial page after loading page is Home Page.
    initialRouteName: "Home",
  }
);

export default createAppContainer(TabNavigator);
