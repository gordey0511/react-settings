import React from 'react';
import {View} from "react-native";
import {Picker} from "@react-native-picker/picker";

export default function MyPicker(props){

    return(<Picker.Item label={props.title} value={props.title} />);
}