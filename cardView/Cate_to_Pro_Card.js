//This file is used to implement Carousel.
import React from "react";
import { View, FlatList } from "react-native";
import CardItem from "./Cate_to_Pro_CardItem";

const Card = ({ data }) => {
  if (data && data.length) {
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
  }
};

export default Card;
