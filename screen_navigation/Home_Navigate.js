//This file is used to implement Navigation between the 5 section/page using Bottom Tab Navigation.
import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Home";

import Product from "../screens/Product";
import Cart from "../screens/Cart";
import Basket from "../screens/Basket";
import Content from "../screens/Content";

import Category_Detail from "../screens/Category_Detail";
import Product_Detail from "../screens/Product_Detail";
import Play_YT from "../screens/Play_YT";

const HomeScreenStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Category_Detail: {
    screen: Category_Detail,
    navigationOptions: {
      headerShown: false,
    },
  },
  Product_Detail: {
    screen: Product_Detail,
    navigationOptions: {
      headerShown: false,
    },
  },
  Play_YT: {
    screen: Play_YT,
  },
});

const ProductScreenStack = createStackNavigator({
  Product: {
    screen: Product,
    navigationOptions: {
      headerShown: false,
    },
  },
  Product_Detail: {
    screen: Product_Detail,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const CartScreenStack = createStackNavigator({
  Cart: {
    screen: Cart,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const BasketScreenStack = createStackNavigator({
  Basket: {
    screen: Basket,
    navigationOptions: {
      headerShown: false,
    },
  },
  Product_Detail: {
    screen: Product_Detail,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const ContentScreenStack = createStackNavigator({
  Content: {
    screen: Content,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const TabNavigator = createMaterialBottomTabNavigator(
  {
    //Home is a variable name used for navigation.
    Home: {
      screen: createAppContainer(HomeScreenStack), //It is refering to the Home Page.
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          //The name of the icon is 'home' which is imported from @expo/vector-icons/FontAwesome5.
          <View>
            <FontAwesome5 name="home" size={26} color={tintColor} />
          </View>
        ),
        activeColor: "#2cf539",
        inactiveColor: "white",
        barStyle: { backgroundColor: "#a8701d" },
      },
    },
    //Product is a variable name used for navigation.
    Product: {
      screen: createAppContainer(ProductScreenStack), //It is referencing to the LiveTv Page.
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
        activeColor: "#2cf539",
        inactiveColor: "white",
        barStyle: { backgroundColor: "#a8701d" },
      },
    },
    Cart: {
      screen: createAppContainer(CartScreenStack),
      navigationOptions: {
        tabBarLabel: "Cart",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name="shopping-cart" size={26} color={tintColor} />
          </View>
        ),
        activeColor: "#2cf539",
        inactiveColor: "white",
        barStyle: { backgroundColor: "#a8701d" },
      },
    },
    Basket: {
      screen: createAppContainer(BasketScreenStack),
      navigationOptions: {
        tabBarLabel: "Basket",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Fontisto name="shopping-basket" size={25} color={tintColor} />
          </View>
        ),
        activeColor: "#2cf539",
        inactiveColor: "white",
        barStyle: { backgroundColor: "#a8701d" },
      },
    },
    Content: {
      screen: createAppContainer(ContentScreenStack),
      navigationOptions: {
        tabBarLabel: "Content",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="play-circle" size={25} color={tintColor} />
          </View>
        ),
        activeColor: "#2cf539",
        inactiveColor: "white",
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
