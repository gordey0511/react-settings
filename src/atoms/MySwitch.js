import React from 'react';
import {View,Text} from "react-native";
import {Switch} from "react-native";

export default function MySwitch(props){

    return<View>
        <Text>{props.title}</Text>
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={props.isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={props.onValueChange}
            value={props.isEnabled}
        />
    </View>;
}