//This file is used to show the information on the Cards. ---NOT USED YET---
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CardItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      {/* Card Image */}
      <View style={{ width: "100%", height: "90%" }}>
        <Image
          style={styles.image}
          source={{ uri: item.variation_set.imageUrl }}
        />
      </View>
      <Text style={styles.itemTitle}> {item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 150,
    height: height / 3,
    backgroundColor: "steelblue",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  itemTitle: {
    color: "white",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
    textAlign: "center",
  },
});

export default CardItem;
