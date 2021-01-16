import React, {useState} from 'react'
import {View,Text} from "react-native";
import {FlatList} from "react-native";
import MyPicker from "../atoms/MyPicker";
import {Picker} from "@react-native-picker/picker";
import MyCheckBox from "../atoms/MyCheckBox";
import MyTextInput from "../atoms/MyTextInput";
import MySwitch from "../atoms/MySwitch";
import MyRadioButton from "../atoms/MyRadioButton";
import Button from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";

export default function SettingsView(props){
    const  dispatch = useDispatch();

    const [selectedItem, setSelectedItem] = useState('')
    let selectedItems = [];
    if(props.type === 'textInput') {
        setSelectedItem(props.children[0].title);
    }
    else if(props.type === 'switch'){
        setSelectedItem(props.children[0].enable);
    }
    else if(props.type === 'radioButton'){
        setSelectedItem('0')
    }
    else {
        for (let i = 0; i < props.children.size; i++) {
            selectedItems.push(false);
        }
    }

    function renderItem({ item }) {
        if(item.id === props.children.size-1){
            props.isLoading[1](false)
        }
        if(props.type === 'select') {
            return <MyPicker title = {item.title}/>
        }
        else if(props.type === 'checkBox') {
            return(<MyCheckBox enable = {item.enable} value={selectedItems[item.id]} onValueChange={(newValue) => {
                selectedItems[item.id] = newValue
                dispatch(select)
            }} title={props.title}/>)
        }
        else if(props.type === 'radioButton') {
            if(props.children.size === 2){
                return <Button title={item.title}  onPress={() => {
                    selectedItems[item.id] = true;
                    if(item.id === 1){
                        selectedItems[0] = false;
                    }
                    else{
                        selectedItems[1] = false;
                    }
                    dispatch(select)
                }}/>
            }
            else {
                return <MyRadioButton title={item.title} checked={selectedItem} id={item.id}
                                      onPress={() => {
                                          setSelectedItem(item.id)
                                          dispatch(select)}}/>
            }
        }
        else if(props.type === 'textInput') {
            return(<MyTextInput value={selectedItem} onChangeText={text => {
                setSelectedItem(text)
                dispatch(select)
            }}/>);
        }
        else if(props.type === 'switch') {
            return(<MySwitch title={item.title} isEnabled={setSelectedItem} onValueChange={ newVal => {setSelectedItem(newVal)
            dispatch(select)
            }}/>)
        }
    };

    return(<View>
        <Text>{props.title}</Text>
        <Text>{props.description}</Text>
        {props.type === 'select' ? <Picker
            selectedValue={props.children.indexOf(true)}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>{
                selectedItems[itemIndex] = itemValue
                dispatch(select)}}>
            <FlatList
                data={props.children}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </Picker> :
            <FlatList
            data={props.children}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        }
    </View>)
}