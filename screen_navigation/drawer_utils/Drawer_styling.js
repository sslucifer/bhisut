//Drawer Styling.
import React from "react";
import { View, ScrollView } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";

class Style extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {/* Green Portion */}
        <View
          style={{
            width: "100%",
            paddingTop: 100,
            backgroundColor: "green",
          }}
        ></View>
        {/* Home & Sign_In Portion */}
        <View style={{ flex: 1 }}>
          <DrawerNavigatorItems {...this.props} />
        </View>
      </ScrollView>
    );
  }
}

export default Style;
