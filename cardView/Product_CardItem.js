//This file is used to show the information on the individual Card.
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");

const CardItem = ({ item }) => {
  return (
    <View style={{flex:1}}>
      <View style={styles.cardView}>
        {/* Card Image */}
        <View style={{ width: "100%", height: "90%", padding: "2%" }}>

          <Image style={styles.image} source={{ uri: item.image }}/>

          {/* Add cart Icon */}
          <TouchableOpacity style={styles.TouchableOpacityStyleLeft}>
            <Icon name="add-shopping-cart" size={20} color="black" />
          </TouchableOpacity>

        </View>
        
        {/* Pack Title */}
        <Text style={styles.itemTitle}> {item.title}</Text>

        {/* To add price tag uncomment the below line..
      <Text style={styles.itemPrice}> {item.variation_set.price}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  cardView: {
    flex: 1,
    width: width /2,
    height: height / 3.2,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
    shadowColor: "#000",
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
  itemPrice: {
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
  itemTitle: {
    color: "#607d8b",
    fontSize: 16,
    marginVertical: 1,
    fontWeight: "bold",
    elevation: 5,
    textAlign: "center",
  },
  TouchableOpacityStyleLeft: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    right: "7%",
    bottom: "7%",
    backgroundColor: "#eeeeee",
  },
});

export default CardItem;
