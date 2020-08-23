import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default class MyWebComponent extends Component {
  constructor(props) {
    super(props);
    this.url = this.props.navigation.getParam("url");
  }
  render() {
    return (
      <WebView
        source={{
          uri: this.url,
        }}
      />
    );
  }
}
