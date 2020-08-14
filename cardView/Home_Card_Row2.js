//This file is used to implement Card for Home Section 1 & 2.
import React from "react";
import { View, FlatList } from "react-native";
import CardItem from "./Home_CardItem_Row2";

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
