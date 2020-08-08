//This is for Product Category.
//Search Bar and google voice mic not added not added.
//Price tag need to be added.
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import Card from "../cardView/Product_Card";
import Header from "../screen_navigation/drawer_utils/Header";

export default class Basket extends React.Component {
  constructor() {
    super();
    this.state = {
      isloading: true,
      product_data: [],
    };
  }
  componentDidMount() {
    fetch("https://naturepureorganicfoods.com/be/api/products/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isloading: false,
          product_data: responseJson.results,
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
        <View style={{ flex: 1 }}>
          <StatusBar hidden={true} />
          <Header {...this.props} />
          <Card data={this.state.product_data} />
          {/* <ScrollView style={styles.scrollview}>
            <View style={styles.container1}>
              <Card item={this.state.product_data[0]} />
              <Card item={this.state.product_data[1]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[2]} />
              <Card item={this.state.product_data[3]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[4]} />
              <Card item={this.state.product_data[5]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[6]} />
              <Card item={this.state.product_data[7]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[8]} />
              <Card item={this.state.product_data[9]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[10]} />
              <Card item={this.state.product_data[11]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[12]} />
              <Card item={this.state.product_data[13]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[14]} />
              <Card item={this.state.product_data[15]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[16]} />
              <Card item={this.state.product_data[17]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[18]} />
              <Card item={this.state.product_data[19]} />
            </View>

            <View style={styles.container1}>
              <Card item={this.state.product_data[20]} />
              <Card item={this.state.product_data[21]} />
            </View>
            <Card item={this.state.product_data[22]} />
          </ScrollView> */}
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
  scrollview: {
    flex: 1,
    backgroundColor: "steelblue",
  },
});
