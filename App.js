import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './component/search.js';
import PlantData from './asset/RootingData2022.json'

export default function App() {

console.log(PlantData)

  return (
    <View style={styles.container}>
      <SearchBar data = {PlantData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
