import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './component/search-david.js';
//import SearchBar from './component/search2.js';
import PlantData from './asset/RootingData2022.json'
import Constants from 'expo-constants';
import RenderSectionList from './component/renderSectionList.js';

export default function App() {
  return (
    <View style={styles.container}>
     <SearchBar data = {PlantData} />
      {/* <RenderSectionList searchResults = {PlantData} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
