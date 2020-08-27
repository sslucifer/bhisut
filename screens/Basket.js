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
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../cardView/Basket_Card";
import Header from "../screen_navigation/drawer_utils/Header";

export default class Basket extends React.Component {
  constructor(props) {
    super(props);
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
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <ActivityIndicator size="large" animating />
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Header {...this.props} />
            <Card
              data={this.state.pack_data}
              navigation={this.props.navigation}
            />
          </View>
        </SafeAreaView>
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
});
