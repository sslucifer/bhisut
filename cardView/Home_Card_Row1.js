//This file is used to implement Card for Home Section 1 & 2.
import React from "react";
import { View, FlatList } from "react-native";
import CardItem from "./Home_CardItem_Row1";

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

// import * as React from "react";
// import { Text, View, SafeAreaView, Image } from "react-native";

// import Carousel from "react-native-snap-carousel";
// export default class Card extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeIndex: 0,
//       carouselItems: props.data,
//     };
//   }

//   _renderItem({ item, index }) {
//     return (
//       <View
//         style={{
//           backgroundColor: "floralwhite",
//           borderRadius: 10,
//           height: 200,
//           padding: 50,
//           marginLeft: 25,
//           marginRight: 25,
//         }}
//       >
//         <Image
//           style={{ width: "170%", height: "2000%", position: "absolute" }}
//           source={{ uri: item.url }}
//         />
//         {/* <Text style={{ fontSize: 30 }}>{item.title}</Text>
//         <Text>{item.text}</Text> */}
//       </View>
//     );
//   }

//   render() {
//     return (
//       <SafeAreaView
//         style={{
//           flex: 1,
//           backgroundColor: "steelblue",
//           paddingTop: 10,
//           paddingBottom: 10,
//         }}
//       >
//         <View
//           style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
//         >
//           <Carousel
//             layout={"stack"}
//             ref={(ref) => (this.carousel = ref)}
//             data={this.state.carouselItems}
//             sliderWidth={400}
//             itemWidth={300}
//             renderItem={this._renderItem}
//             onSnapToItem={(index) => this.setState({ activeIndex: index })}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }
