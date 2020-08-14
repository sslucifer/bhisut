//Home Page
import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

import Carousel from "../carousel/Carousel";
import Card1 from "../cardView/Home_Card_Row1";
import Card2 from "../cardView/Home_Card_Row2";
import Card3 from "../cardView/Home_Card_Row3";
import Header from "../screen_navigation/drawer_utils/Header";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
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
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <ActivityIndicator size="large" animating />
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <Header {...this.props} />
            <ScrollView style={styles.scrollview}>
              {/* For infinte Carousel. */}
              <View style={styles.caro}>
                <Carousel data={this.state.carousel_data} />
              </View>
              <View style={styles.google_voice}>
                <TouchableOpacity style={styles.mic}>
                  <Icon name="microphone" size={24} color="red" />
                </TouchableOpacity>
              </View>
              {/* Section 1 */}
              <View style={styles.section}>
                <Card1
                  data={this.state.category_data}
                  navigation={this.props.navigation}
                />
              </View>
              {/* Section 2 */}
              <View style={styles.section}>
                <Card2
                  data={this.state.product_data}
                  navigation={this.props.navigation}
                />
              </View>
              {/* Section 3 */}
              <View style={styles.section}>
                <Card3
                  data={this.state.curated_list}
                  navigation={this.props.navigation}
                />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  // Carousel
  caro: {
    paddingVertical: "0.5%",
    flex: 1,
    backgroundColor: "transparent",
    height: "20%",
    textAlign: "center",
    alignItems: "center",
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
    flex: 1,
    width: "100%",
    height: "22%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginVertical: "0.6%",
  },
  mic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    backgroundColor: "#ffffff",
  },
  scrollview: {
    backgroundColor: "white",
  },
  section: {
    flex: 1,
    height: "10%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  textFormat: {
    marginLeft: "10%",
  },
});
