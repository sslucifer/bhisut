import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Login from "./Login";
export default class Cart extends React.Component {
  render() {
    return (
      <Login />
      // <ScrollView
      //   style={{
      //     flex: 1,
      //     alignContent: "center",
      //     width: "100%",
      //     height: "100%",
      //   }}
      // >
      //   <View style={styles.container}>
      //     <Text
      //       style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}
      //     >
      //       Cart
      //     </Text>
      //   </View>
      // </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
