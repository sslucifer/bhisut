import React from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";
// import { Header } from "react-native/Libraries/NewAppScreen";
import Header from "../screen_navigation/drawer_utils/Header";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Header {...this.props} />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.headBx}>
              <Text style={{ fontSize: 35, textTransform: "uppercase" }}>
                Contact Support
              </Text>
              <Text style={{ textAlign: "center", fontSize: 20 }}>
                +917899467369
              </Text>
            </View>
            <View style={styles.inputCon}>
              <TextInput
                style={{ flex: 1, width: "70%" }}
                inputStyle={{ color: "black" }}
                placeholder="Mobile"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="phone-pad"
                maxLength={10}
              />
            </View>
            <View style={styles.inputCon}>
              <TextInput
                style={{ flex: 1, width: "70%" }}
                inputStyle={{ color: "black" }}
                placeholder="Full Name"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="default"
                maxLength={10}
              />
            </View>
            <View style={styles.inputCon}>
              <TextInput
                style={{ flex: 1, width: "70%" }}
                inputStyle={{ color: "black" }}
                placeholder="Email"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="email-address"
                maxLength={10}
              />
            </View>
            <View style={styles.inputCon}>
              <TextInput
                style={{ flex: 1, width: "70%" }}
                inputStyle={{ color: "black" }}
                placeholder="Apartment"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="default"
                maxLength={10}
              />
            </View>
            <View style={styles.inputCon}>
              <TextInput
                style={{ flex: 1, width: "70%" }}
                inputStyle={{ color: "black" }}
                placeholder="Address"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="default"
                maxLength={10}
              />
            </View>
            <View style={styles.inputCon}>
              <TextInput
                style={{ flex: 1, width: "70%" }}
                inputStyle={{ color: "black" }}
                placeholder="Area"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="default"
                maxLength={10}
              />
            </View>
            <View style={styles.inputCon}>
              <TextInput
                style={{ flex: 1, width: "70%" }}
                inputStyle={{ color: "black" }}
                placeholder="City"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="default"
                maxLength={10}
              />
            </View>
            <View style={styles.inputCon}>
              <TextInput
                style={{ flex: 1, width: "70%" }}
                inputStyle={{ color: "black" }}
                placeholder="State"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="default"
                maxLength={10}
              />
            </View>
            <View style={styles.inputCon}>
              <TextInput
                style={{ flex: 1, width: "70%" }}
                inputStyle={{ color: "black" }}
                placeholder="PIN Code"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="number-pad"
                maxLength={10}
              />
            </View>
            <View style={styles.inputText}>
              <Text style={{ color: "red" }}>
                Please give valid E-mail address and Phone number so that we can
                communicate.
              </Text>
            </View>
            <View style={styles.inputCon}>
              <TextInput
                multiline
                style={{
                  flex: 1,
                  width: "70%",
                  height: 100,
                  textAlignVertical: "top",
                }}
                inputStyle={{ color: "black" }}
                placeholder="Enter Support Query"
                placeholderTextColor="#8e8e8e"
                underlineColorAndroid="transparent"
                keyboardType="default"
                maxLength={10}
              />
            </View>
            <Button
              buttonStyle={{
                backgroundColor: "gold",
                borderRadius: 20,
                margin: "5%",
                width: 200,
                elevation: 8,
                paddingHorizontal: 15,
              }}
              icon={{
                name: "user",
                color: "black",
                size: 18,
                type: "font-awesome",
              }}
              title="Submit"
              titleStyle={{ color: "black" }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "12%",
    alignItems: "center",
    backgroundColor: "white",
  },
  headBx: {
    backgroundColor: "transparent",
  },
  inputCon: {
    width: "70%",
    flexDirection: "row",
    borderBottomWidth: 1,
    marginTop: "5%",
  },
  inputText: {
    width: "70%",
    flexDirection: "row",
    marginTop: "5%",
  },
});
