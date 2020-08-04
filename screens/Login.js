import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { CheckBox, Button, SocialIcon, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import WebViewExample from "./privacy_policy";

import Header from "../screen_navigation/drawer_utils/Header";
const AlertExample = () => {
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ],
    { cancelable: true }
  );
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      icon: "eye-slash",
      password: true,
      checked: false,
    };
  }

  change() {
    this.setState((prevState) => ({
      icon: prevState.icon == "eye" ? "eye-slash" : "eye",
      password: !prevState.password,
    }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} />
        {/* <Image source={require("../assets/fire.jpg")} style={styles.image} /> */}

        <View style={styles.container}>
          <Input
            containerStyle={{ width: "65%" }}
            inputContainerStyle={{ borderBottomWidth: 2 }}
            inputStyle={{ color: "black" }}
            placeholder="Mobile"
            placeholderTextColor="#8e8e8e"
            underlineColorAndroid="transparent"
            keyboardType="phone-pad"
            autoCapitalize="none"
            rightIcon={<Icon name="mobile-alt" size={18} color="black" />}
          />

          <Input
            containerStyle={{ width: "65%" }}
            inputContainerStyle={{ borderBottomWidth: 2 }}
            inputStyle={{ color: "black" }}
            placeholder="Password"
            placeholderTextColor="#8e8e8e"
            underlineColorAndroid="transparent"
            keyboardType="default"
            secureTextEntry={this.state.password}
            autoCapitalize="none"
            rightIcon={
              <Icon
                name={this.state.icon}
                onPress={() => this.change()}
                size={18}
                solid
                color="black"
              />
            }
          />

          <Button
            buttonStyle={{
              backgroundColor: "gold",
              borderRadius: 20,
              margin: "5%",
              width: 200,
              elevation: 10,
              paddingHorizontal: 15,
            }}
            icon={{
              name: "user",
              color: "black",
              size: 18,
              type: "font-awesome",
            }}
            title="Login"
            titleStyle={{ color: "black" }}
          />

          <View style={styles.containR}>
            {/* <Text style={{fontSize:18,
                            color:'black'}}>No account yet ? Create one </Text>

              <Text style={{color: '#1565c0',
                            fontSize:18,
                            fontStyle:'italic',
                            textDecorationLine:'underline'}} 
                    onPress={AlertExample}>here.</Text> */}

            <TouchableOpacity onPress={AlertExample}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Send OTP</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containR}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "black",
                marginHorizontal: 10,
                opacity: 0.5,
              }}
            />

            <Text style={styles.separator}>OR</Text>

            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "black",
                marginHorizontal: 10,
                opacity: 0.5,
              }}
            />
          </View>

          <View style={styles.containC}>
            <SocialIcon
              button
              style={{
                paddingHorizontal: 10,
                borderRadius: 5,
                elevation: 10,
                margin: 10,
              }}
              onPress={AlertExample}
              title="Sign In With Facebook"
              type="facebook"
            />

            <SocialIcon
              button
              style={{
                paddingHorizontal: 10,
                borderRadius: 5,
                elevation: 10,
                margin: 10,
              }}
              onPress={AlertExample}
              title=" Sign In With Google "
              type="google"
            />
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              opacity: 0.8,
            }}
          >
            <CheckBox
              title="I agree to Privacy Policy."
              textStyle={{ color: "black", fontSize: 20 }}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
                opacity: 0.9,
              }}
              checkedIcon={
                <Icon name="check-square" size={28} color="#1565c0" />
              }
              uncheckedIcon={<Icon name="square" size={28} color="#1565c0" />}
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <WebViewExample />

              <Text style={{ fontSize: 18, color: "black" }}>
                {" "}
                to see Privacy Policy.
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.TouchableOpacityStyleLeft}>
            <Icon name="shopping-cart" size={23} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.TouchableOpacityStyleRight}>
            <Icon name="landmark" size={23} color="white" />
          </TouchableOpacity>

          <StatusBar barStyle="dark-content" hidden={true} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
    alignItems: "center",
    backgroundColor: "white",
  },
  containR: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containC: {
    margin: 10,
    marginVertical: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxHeight: "12%",
    width: "100%",
  },
  separator: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "monospace",
    opacity: 0.7,
  },
  TouchableOpacityStyleLeft: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    right: "7%",
    bottom: "3%",
    backgroundColor: "#ab47bc",
  },
  TouchableOpacityStyleRight: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    left: "7%",
    bottom: "3%",
    backgroundColor: "#ab47bc",
  },
});
