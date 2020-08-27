//This file is used to show the information on the Cards.
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const CardItem = ({ data, item, navigation }) => {
  return (
    <View style={styles.cardView}>
      {/* Card Image */}
      <TouchableOpacity
        style={{ width: "100%", height: "80%", padding: "1%" }}
        onPress={() => {
          navigation.navigate("Play_YT", { data: data, videoid: item.videoid });
        }}>
          <Image style={styles.image} source={{ uri: item.imgurl }} />
      </TouchableOpacity>
      <Text style={styles.itemTitle}> {item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: width - 180,
    height: height / 3.2,
    backgroundColor: "#eeeeee",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "stretch",
  },
  itemTitle: {
    color: "#607d8b",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor:"green"
  },
});

export default CardItem;
