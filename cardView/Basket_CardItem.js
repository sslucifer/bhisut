//This file is used to show the information on the individual Card.
import React from "react";
import {
  Alert,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");

const AlertExample = () => {
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ],
    { cancelable: true }
  );
};

const CardItem = ({ item, navigation }) => {
  return (
    <View style={styles.cardView}>
      {/* Card Image */}
      <View style={{ width: "100%", height: "90%", padding: "2%" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Product_Detail", {
              id: item.id,
              title: item.title,
              image: item.imageUrl,
              description: item.description,
              price: item.price,
              tax: item.tax,
            });
          }}
        >
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
        </TouchableOpacity>
      </View>

      {/* Add cart Icon */}
      <TouchableOpacity onPress={AlertExample}
                        style={styles.TouchableOpacityStyleLeft}>
        <Icon name="add-shopping-cart" size={20} color="black" />
      </TouchableOpacity>

      {/* Pack Title */}
      <Text style={styles.itemTitle}> {item.title}</Text>

      {/* To add price tag uncomment the below line..
     <Text style={styles.itemPrice}> {item.price}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width / 2,
    height: height / 3,
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
    resizeMode: "stretch",
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
    bottom: "15%",
    backgroundColor: "#eeeeee",
  },
});

export default CardItem;
