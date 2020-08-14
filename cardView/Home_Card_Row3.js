//This file is used to implement Card for Home Section 3.
import React from "react";
import { View, FlatList } from "react-native";
import CardItem from "./Home_CardItem_Row3";

const Card = ({ data, navigation }) => {
  return (
    <View>
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
          return <CardItem data={data} item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

export default Card;
