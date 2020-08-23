//This file is used to implement Product Card.
import React from "react";
import { View, FlatList, ToastAndroid } from "react-native";
import CardItem from "./Product_CardItem";

const Card = ({ data, navigation }) => {
  if (data && data.length) {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        {/* Storing the Images in form of FlatList/ScrollView in Vertical direction in 2 column. */}
        <FlatList
          data={data}
          ref={() => {}}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
          snapToAlignment="center"
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CardItem item={item} navigation={navigation} />;
          }}
        />
      </View>
    );
  } else {
    ToastAndroid.showWithGravityAndOffset(
      "No Result Found",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
};

export default Card;
