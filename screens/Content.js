import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Carousel from "../carousel/Carousel";
import Card1 from "../cardView/Content_Card_Row1";
import Card2 from "../cardView/Content_Card_Row2";
import Card3 from "../cardView/Content_Card_Row3";
import Card4 from "../cardView/Content_Card_Row3";
import Header from "../screen_navigation/drawer_utils/Header";
import { AgriculturalData } from "../externalDatas/FoodAndAgriData";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      blog_data: [],
      nutrition_data: [],
      carousel_data: [],
      foodChannel_data: [],
      agricultural_data: [],
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
        fetch("https://naturepureorganicfoods.com/be/api/adms/blog/")
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              blog_data: responseJson.results,
            });
          })
          .then(
            fetch(
              "https://naturepureorganicfoods.com/be/api/adms/yt/curatedl/list/"
            )
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                  nutrition_data: responseJson.results,
                });
              })
              .then(
                fetch(
                  "https://naturepureorganicfoods.com/be/api/adms/yt/live/channels/"
                )
                  .then((response) => response.json())
                  .then((responseJson) => {
                    this.setState({
                      foodChannel_data: responseJson.results,
                    });
                  })
                  .then(
                    fetch("https://naturepureorganicfoods.com/be/api/adms/fa/")
                      .then((response) => response.json())
                      .then((responseJson) => {
                        this.setState({
                          isloading: false,
                          agricultural_data: AgriculturalData,
                        });
                      })
                      .catch((error) => console.log(error))
                  )
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
              {/* Section 1 */}
              <View style={styles.section}>
                <Text style={styles.textFormat}>Blog and Article</Text>
                <Card1
                  data={this.state.blog_data}
                  navigation={this.props.navigation}
                />
              </View>
              {/* Section 2 */}
              <View style={styles.section}>
                <Text style={styles.textFormat}>Nutrition Fact</Text>
                <Card2
                  data={this.state.nutrition_data}
                  navigation={this.props.navigation}
                />
              </View>
              {/* Section 3 */}
              <View style={styles.section}>
                <Text style={styles.textFormat}>Food Channels</Text>
                <Card3
                  data={this.state.foodChannel_data}
                  navigation={this.props.navigation}
                />
              </View>
              {/* Section 4 */}
              <View style={styles.section}>
                <Text style={styles.textFormat}>Food and Agriculture</Text>
                <Card4
                  data={this.state.agricultural_data}
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
