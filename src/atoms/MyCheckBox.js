import React from 'react';
import {View,Text} from "react-native";
import CheckBox from '@react-native-community/checkbox';

export default function MyCheckBox(props){

    return<View>
        <CheckBox
        disabled={!props.enable}
        value={props.value}
        onValueChange={props.onValueChange}
        />
        <Text>{props.title}</Text>
    </View>;
}