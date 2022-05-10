import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
//import uuid from 'react-native-uuid';
import RenderSectionList from './renderSectionList.js';
import PlantData from '../asset/RootingData2022.json';
import Constants from 'expo-constants';

const SearchBar = props =>{
    //The plant data is passed into props
    const {data} = props;

    //this determines whether or not the search results will be displayed
    const [displayResults, setDisplay] = useState(false);

    //This state object stores whatever the user types onto the search bar
    const [query, setQuery] = useState('');

        //this is used to store the results of the search query
    const [results, setResults] = useState([]);

        const handleTextChange = event =>{
            setQuery(event)
        }

        //This function is meant to complement the function filterData
        //Based the criteria entered into the parameter, it determines what property name is to be used in the search query

        const searchByCriteria = (obj, criteria) =>{
            switch(criteria){
                case "Name":{
                    return obj.Name.toLowerCase().search(query.toLowerCase())
                }
                case "Cultivar":{
                    return obj.Cultivar.toLowerCase().search(query.toLowerCase())
                }
                case "Cutting Type":{
                    return obj["Cutting Type"].toLowerCase().search(query.toLowerCase())
                }
                case "Age-Stage":{
                    return obj["Age-Stage"].toLowerCase().search(query.toLowerCase())
                }
                case "When Taken":{
                    return obj["When Taken"].toLowerCase().search(query.toLowerCase())
                }
                case "Medium":{
                    return obj.Medium.toLowerCase().search(query.toLowerCase())
                }
                case "Auxin":{
                    return obj.Auxin.toLowerCase().search(query.toLowerCase())
                }
                case "Structure":{
                    return obj.Structure.toLowerCase().search(query.toLowerCase())
                }
                case "Bottom Heat":{
                    return obj["Bottom Heat"].toLowerCase().search(query.toLowerCase())
                }
                case "% Rooting":{
                    return obj["% Rooting"].toLowerCase().search(query.toLowerCase())
                }
                case "Time to Root":{
                    return obj["Time to Root"].toLowerCase().search(query.toLowerCase())
                }
                case "Care":{
                    return obj["Care"].toLowerCase().search(query.toLowerCase())
                }
                case "Location":{
                    return obj.Location.toLowerCase().search(query.toLowerCase())
                }
                case "Reference":{
                    return obj.Reference.toLowerCase().search(query.toLowerCase())
                }

                default:
                    return -1
            }

        }



        //This function collects the search results into the an array and returns it
        //It uses the method Array.filter(/*boolean evaluation*/)
        //It returns an array with all the values that passes the boolean evaluation inside the parameter
        const filterData = () =>{
        if(data){
            let newArray = data.filter(val => searchByCriteria(val, "Name") > -1
            || searchByCriteria(val, "Cultivar") > -1
            || searchByCriteria(val, "Cutting Type") > -1
            || searchByCriteria(val, "Age-Stage") > -1
            || searchByCriteria(val, "When Taken") > -1
            || searchByCriteria(val, "Medium") > -1
            || searchByCriteria(val, "Auxin") > -1
            || searchByCriteria(val, "Structure") > -1
            || searchByCriteria(val, "Bottom Heat") > -1
            || searchByCriteria(val, "% Rooting") > -1
            || searchByCriteria(val, "Time to Root") > -1
            || searchByCriteria(val, "Care") > -1
            || searchByCriteria(val, "Location") > -1
            || searchByCriteria(val, "Reference") > -1
            )
            setResults(newArray.map(val => val));
            }
        }

    React.useEffect(()=>{
      filterData();
        if(results.length > 0 && query.length > 0){
            setDisplay(true)
        }
        else{
            setDisplay(false)
            }
    }, [query])

return(
    <View style = {styles.searchContainer}>
        <View style = {styles.inputContainer}>
         <TextInput value = {query} onChangeText = {handleTextChange} styles = {styles.textInput} placeholder = "Start Search"/>
       </View>
       {displayResults &&
       <View style = {styles.scrollContainer}>
              <RenderSectionList searchResults={results} />
       </View>
        }
    </View>
)
}

export default SearchBar;

 const styles = StyleSheet.create({
 searchContainer:{
    width: '100%',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
 },
 scrollContainer:{
    marginTop: 30,
 },
 textInput:{
    borderWidth: 2,
    borderColor: "#000000",
    paddingVertical: 10,
    paddingLeft: 5,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",

 },
 inputContainer: {
     borderWidth: 2,
     width: '80%',
     position: 'absolute',
     zIndex: 1,
     backgroundColor: "#daf2e0",
     paddingVertical: 5,
     paddingLeft: 5,
 },
 resultRow: {
     marginVertical: 10,
     marginHorizontal: 10,
     backgroundColor: "#daf2e0",
 },

 })