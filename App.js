import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SettingsView from "./src/moleculs/SettingsView";
import Settings from "./src/organisms/Settings";

export default function App() {
  return (
    <View style={styles.container}>
      <Settings/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
