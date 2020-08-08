//Home Page
import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Carousel from "../carousel/Carousel";
import Card from "../cardView/Card";
import Card2 from "../cardView/Home_Card";
import Header from "../screen_navigation/drawer_utils/Header";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isloading: true,
      category_data: [],
      product_data: [],
      carousel_data: [],
      curated_list: [],
    };
  }

  componentDidMount() {
    fetch("https://naturepureorganicfoods.com/be/api/adms/banner/list/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          carousel_data: responseJson.results,
        });
      })
      .then(
        fetch("https://naturepureorganicfoods.com/be/api/categories/")
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              category_data: responseJson.results,
            });
          })
          .then(
            fetch("https://naturepureorganicfoods.com/be/api/products/")
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                  product_data: responseJson.results,
                });
              })
              .then(
                fetch(
                  "https://naturepureorganicfoods.com/be/api/adms/yt/curatedl/list/"
                )
                  .then((response) => response.json())
                  .then((responseJson) => {
                    this.setState({
                      isloading: false,
                      curated_list: responseJson.results,
                    });
                  })
                  .catch((error) => console.log(error))
              )
              .catch((error) => console.log(error))
          )
          .catch((error) => console.log(error))
      )
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
          <ScrollView style={styles.scrollview}>
            {/* For infinte Carousel. */}
            <View style={styles.caro}>
              <Carousel data={this.state.carousel_data} />
            </View>
            <View style={styles.google_voice}>
              <FontAwesome5 name="microphone" size={24} color="black" />
            </View>
            {/* Section 1 */}
            <View style={styles.section}>
              <Card data={this.state.category_data} />
            </View>
            {/* Section 2 */}
            <View style={styles.section}>
              <Card data={this.state.product_data} />
            </View>
            {/* Section 3 */}
            <View style={styles.section}>
              <Card2 data={this.state.curated_list} />
            </View>
          </ScrollView>
          {/* <View
            style={{ height: "8%", width: "100%", backgroundColor: "white" }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: "black",
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: "steelblue",
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: "red",
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: "green",
                }}
              ></View>
            </View>
          </View> */}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  // Carousel
  caro: {
    flex: 1,
    backgroundColor: "steelblue",
    height: "90%",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3BAD87",
    paddingHorizontal: 18,
    paddingTop: 5,
  },
  google_voice: {
    width: "100%",
    height: "5%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  scrollview: {
    flex: 1,
    backgroundColor: "steelblue",
  },
  section: {
    flex: 1,
    height: "10%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "steelblue",
  },
  textFormat: {
    marginLeft: "10%",
  },
});
