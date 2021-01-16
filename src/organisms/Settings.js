import React, {useState} from 'react'
import {View} from "react-native-web";
import {FlatList} from "react-native";
import MyPicker from "../atoms/MyPicker";
import SettingsView from "../moleculs/SettingsView";
import {ActivityIndicator} from "react-native";

export default function Settings(){
    const [isLoading,setIsLoading] = useState(true);
    const settings = [{
        id: 0,
        title: 'CHECKBOX',
        description: 'This is checkBox',
        type: 'select',
        children: [{
            id: 0,
            title: 'First checkBox',
            enable: true,
            value: true
        },{
            id: 1,
            title: 'Second checkBox',
            enable: false,
            value: false
        }],
        comment: 'the best comment'
    },{
        id: 0,
        title: '',
        description: '',
        type: 'select',
        children: [{
            id: 0,
            title: 'First checkBox',
            enable: true,
            value: true
        },{
            id: 1,
            title: 'Second checkBox',
            enable: false,
            value: false
        }],
        comment: 'the best comment'
    },{
        id: 0,
        title: '',
        description: '',
        type: 'select',
        children: [{
            id: 0,
            title: 'First checkBox',
            enable: true,
            value: true
        },{
            id: 1,
            title: 'Second checkBox',
            enable: false,
            value: false
        }],
        comment: 'the best comment'
    }];

    function renderItem({ item }) {
        return(<SettingsView title = {item.title} description = {item.description} children = {item.children} type = {item.type} isLoading={[isLoading,setIsLoading]}/>)
    };

    return(<View>
        {isLoading ? <ActivityIndicator/> : null}
        <FlatList
            data={settings}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>);
}