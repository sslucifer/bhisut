//This is for Basket Category.
//Price tag need to be added.
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Card from "../cardView/Basket_Card";
import Header from "../screen_navigation/drawer_utils/Header";

export default class Basket extends React.Component {
  constructor() {
    super();
    this.state = {
      isloading: true,
      pack_data: [],
    };
  }
  componentDidMount() {
    fetch("https://naturepureorganicfoods.com/be/api/products/baskets/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isloading: false,
          pack_data: responseJson.results,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header />
          <View style={styles.container1}>
            <Card item={this.state.pack_data[0]} />
            <Card item={this.state.pack_data[1]} />
          </View>
          {/* <View style={styles.container1}> */}
          <Card item={this.state.pack_data[2]} />
          {/* </View> */}
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
