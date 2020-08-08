//This file is used to show the information on the Cards.
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CardItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      {/* Card Image */}
      <View style={{ width: "100%", height: "90%", padding: '3%' }}>
        <Image style={styles.image}
               resizeMode="cover" 
               source={{ uri: item.image }} />
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
    backgroundColor: "#eeeeee",
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
    color: "#607d8b",
    fontSize: 16,
    marginVertical: 1,
    fontWeight: "bold",
    elevation: 5,
    textAlign: "center",
  },
});

export default CardItem;
