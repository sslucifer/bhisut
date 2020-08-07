//This file is used to implement Card for Home Section 3.
import React from "react";
import { View, FlatList } from "react-native";
import CardItem from "./Home_CardItem";

const Card = ({ data }) => {
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
          return <CardItem item={item} />;
        }}
      />
    </View>
  );
};

export default Card;
