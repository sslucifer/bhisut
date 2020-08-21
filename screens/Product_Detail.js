import React, {Component} from "react";
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../screen_navigation/drawer_utils/Header";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("window");

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      Default_Rating: 1,
      Max_Rating: 5,
    };
     this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
     this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  }

  UpdateRating(key) {
    this.setState({ Default_Rating: key });
  }

  render() {
    let React_Native_Rating_Bar = [];
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this,i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
          <Header {...this.props} />
          <ScrollView>

            <View style={styles.imgBx}>
              <Image source={require("../assets/samosa-recipe.jpg")}
                     style={styles.fitbg}/>
            </View>
            <View style={styles.quantBx}>
                <Text style={{fontFamily: 'notoserif', fontSize: 15}}>Quantity : </Text>
                <TextInput style={{width: "7%",marginHorizontal: "1%",borderBottomWidth: 1 }}
                           textAlign= "center"
                           inputStyle={{ color: "black" }}
                           defaultValue="1"
                           underlineColorAndroid="transparent"
                           keyboardType="number-pad"/>
            </View>
            <View style={styles.iconBx}>
              <TouchableOpacity style={styles.icn}>
                <Icon name="shopping-cart" size={20} color="red" />
              </TouchableOpacity>
            </View>
            <View style={styles.ratingBx}>
              <View style={{flex:1, flexDirection: "row", marginVertical: 10}}>
                {React_Native_Rating_Bar}
              </View>
              <Text>
                {this.state.Default_Rating} / {this.state.Max_Rating}
              </Text>
            </View>
            <View style={styles.titleBx}>
              <Text style={{fontSize: 30, fontWeight: "bold"}}>Indian Samosa</Text>
              <Text style={{fontSize: 30, fontWeight: "bold", color: "#4caf50"}}>&#8377;1</Text>
            </View>
            <View style={styles.contentBx}>
              <Text style={{fontSize: 15}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Text>
            </View>

          </ScrollView>
        
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  imgBx: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height/3.2,
    padding: "2%",
    marginTop: "5%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    elevation: 10,
  },
  fitbg: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch"
  },
  iconBx: {
    flex: 1,
    width: "100%",
    height: "22%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginVertical: "2%",
  },
  icn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    backgroundColor: "#ffffff",
  },
  quantBx: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
    height: "20%",
    marginTop: "5%",
    marginBottom: "2%",
  },
  ratingBx: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "1%"
  },
  titleBx: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "4%",
    marginTop: "10%"
  },
  contentBx: {
    flex: 1,
    textAlign: "left",
    paddingHorizontal: "4%",
    marginTop: "3%",
    backgroundColor: "transparent"
  },
  StarImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
});
