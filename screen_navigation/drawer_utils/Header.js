//This is used to create a header for all screens which contains the logo and the drawer icon..
import React, { Component } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class HeaderNavigationBar extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "12%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={require("../../assets/fire.jpg")}
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}
            style={{ paddingHorizontal: 20 }}
          >
            <Ionicons name="ios-menu" size={32} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
