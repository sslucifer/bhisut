//This file is used to show the information on the Cards.
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CardItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      {/* Card Image */}
      <View style={{ width: "100%", height: "80%", padding: "1%" }}>
        <Image style={styles.image} source={{ uri: item.imgurl }} />
      </View>
      <View style={styles.textBx}>
        <Text style={styles.itemTitle}> {item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 180,
    height: height / 3.5,
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
    resizeMode: "cover"
  },
  textBx: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  itemTitle: {
    color: "#607d8b",
    fontSize: 14,
    fontWeight: "bold",
    elevation: 5,
    textAlign: "center",
  },
});

export default CardItem;
