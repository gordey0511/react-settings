import React from 'react';
import {View} from "react-native";
import { RadioButton } from 'react-native-paper';

export default function MyPicker(props){

    return(<RadioButton
        value={props.title}
        status={ props.checked === props.id ? 'checked' : 'unchecked' }
        onPress={props.onPress}
    />);
}