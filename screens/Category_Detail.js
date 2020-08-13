//This is for Category_Details.
//Search Bar and google voice mic added.
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
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

import Card from "../cardView/Product_Card";
import Header from "../screen_navigation/drawer_utils/Header";

export default class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      category_data: [],
      url: this.props.navigation.getParam("url"),
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isloading: false,
          category_data: responseJson["Category Details"].product_set,
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
          <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <Header {...this.props} />
            <View style={styles.google_voice}>
              <TouchableOpacity style={styles.mic}>
                <Icon name="microphone" size={24} color="red" />
              </TouchableOpacity>
            </View>
            <Card data={this.state.category_data} />
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
  google_voice: {
    width: "100%",
    height: "8%",
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
});
