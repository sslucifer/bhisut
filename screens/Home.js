//Home Page
import React from "react";
import {StyleSheet,Image,View,ScrollView,StatusBar,ActivityIndicator} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Carousel from "../carousel/Carousel";
import { dummyData } from "../dummyData/Home_Carousel_Data";
import Card from "../cardView/Card";
import Header from "../screen_navigation/drawer_utils/Header";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isloading: true,
      category_data: [],
      product_data: [],
    };
  }

  componentDidMount() {
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
              isloading: false,
              product_data: responseJson.results,
            });
          })
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
              <Carousel data={dummyData} 
                        style={styles.carol}/>
            </View>
            { this.pagination }
            <View style={styles.google_voice}>
              <TouchableOpacity style={styles.mic}>
                <Icon name="microphone" 
                      size={24} 
                      color="red"/>
              </TouchableOpacity>
            </View>
            {/* Section 1 */}
            <View style={styles.section}>
              <Card data={this.state.category_data} />
            </View>
            {/* Section 2 */}
            <View style={styles.section}>
              <Card data={this.state.product_data} />
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  // Carousel
  caro: {
    paddingVertical:'2%',
    backgroundColor: "white",
    flex: 1,
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
    marginVertical:"1.8%",
  },
  mic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    backgroundColor: "#fff",
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
