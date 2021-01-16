import React from 'react';
import {View,TextInput} from "react-native";

export default function MyTextInput(props){


    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    );
}