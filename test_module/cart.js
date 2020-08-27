import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import Header from "../screen_navigation/drawer_utils/Header";
import { Button } from "react-native-elements";

export default class Cart extends React.Component {

    render () {
        return(
            <View style={{flex:1}}>
                <Header {...this.props} />
                <View style={{flex: 1,flexDirection: "row", padding:"2%"}}>
                    <View style={{flex: 1,flexDirection: "column"}}>
                        <Text style={{fontSize: 25}}>Cart Total : </Text>
                        <Text style={{fontSize: 25}}>Tax : </Text>
                        <Text style={{fontSize: 25}}>Shipping : </Text>
                        <Text style={{fontSize: 25}}>Total : </Text>
                        <Text style={{fontSize: 25}}>Total Item : </Text>
                    </View>
                    <View style={{flex: 2,flexDirection: "column"}}>
                        <Text style={{fontSize: 25}}>&#8377;0</Text>
                        <Text style={{fontSize: 25}}>&#8377;0</Text>
                        <Text style={{fontSize: 25}}>&#8377;0</Text>
                        <Text style={{fontSize: 25}}>&#8377;0</Text>
                        <Text style={{fontSize: 25}}>0</Text>
                    </View>
                </View>
                <View style={{flex: 3}}>
                <Button title="check" />
                </View>
                <StatusBar barStyle="dark-content" hidden={true} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    context: {
        
    },
});