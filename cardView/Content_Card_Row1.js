//This file is used to implement Product Card.
import React from "react";
import { View, FlatList } from "react-native";
import CardItem from "./Content_CardItem_Row1";

const Card = ({ data, navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {/* Storing the Images in form of FlatList/ScrollView in horizontal direction. */}
      <FlatList
        data={data}
        ref={() => {}}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        snapToAlignment="center"
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <CardItem item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

export default Card;
