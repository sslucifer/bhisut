import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default class Product extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          alignContent: "center",
          width: "100%",
          height: "100%",
          marginTop: "10%",
        }}
      >
        <View style={styles.container}>
          <Text
            style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}
          >
            Product
          </Text>
        </View>
      </ScrollView>
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
