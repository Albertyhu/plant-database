import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import uuid from 'react-native-uuid';

const RenderItem = ({item}) =>{
    return(
    <TouchableOpacity>
        <View style = {styles.resultRow}>
            <Text>{item.Name}</Text>
        </View>
    </TouchableOpacity>
    )
}

const RenderItemDetails = ({item}) =>{
    return(
    <TouchableOpacity>
        <View style = {styles.resultRow}>
            <Text style = {{fontWeight: "bold"}}>{item.Name}</Text>
            <View style = {styles.details}>
               {item.Cultivar && <Text>Cultivar: {item.Cultivar}</Text>}
               {item.Care &&  <Text>Care: {item.Care}</Text> }
               {item.Location && <Text>Location: {item.Location}</Text> }
               {item.Reference &&  <Text>Reference: {item.Reference}</Text> }
            </View>
        </View>
    </TouchableOpacity>
    )
}


const SearchBar = props =>{
    //The plant data is passed into props
    const {data} = props;

    //this determines whether or not the search results will be displayed
    const [displayResults, setDisplay] = useState(false);

    //This state object stores whatever the user types onto the search bar
    const [query, setQuery] = useState('');

        //this is used to store the results of the search query
    const [results, setResults] = useState([]);

    //This handles what happens when the user types a search query onto the search bar
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
            case "Location":{
                return obj.Location.toLowerCase().search(query.toLowerCase())
            }
            case "Medium":{
                return obj.Medium.toLowerCase().search(query.toLowerCase())
            }
            case "Reference":{
                return obj.Reference.toLowerCase().search(query.toLowerCase())
            }
            case "Structure":{
                 return obj.Structure.toLowerCase().search(query.toLowerCase())
             }
             case "Auxin":{
                 return obj.Auxin.toLowerCase().search(query.toLowerCase())
             }
             case "Cultivar":{
                 return obj.Cultivar.toLowerCase().search(query.toLowerCase())
             }
              case "Cutting Type":{
                  return obj["Cutting Type"].toLowerCase().search(query.toLowerCase())
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
        || searchByCriteria(val, "Location") > -1
        || searchByCriteria(val, "Medium") > -1
        || searchByCriteria(val, "Auxin") > -1
        || searchByCriteria(val, "Reference") > -1
        || searchByCriteria(val, "Structure") > -1
        || searchByCriteria(val, "Cultivar") > -1
        || searchByCriteria(val, "Cutting Type") > -1
        )
        setResults(newArray.map(val => val));
        }
    }

    //The follow code instructs the program to start collecting search results once the user starts typing on the search bar
    useEffect(()=>{
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
                <TextInput value = {query} onChangeText = {handleTextChange} styles = {styles.textInput} placeholder = "Search"/>
            </View>
            {displayResults &&
            <View>
                <FlatList
                    data={results}
                     key = {uuid}
                     renderItem={item => RenderItem(item)}
                />
            </View>
            }
        </View>
    )
}

export default SearchBar;



 const styles = StyleSheet.create({
 searchContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
 },
 textInput:{
    borderWidth: 2,
    borderColor: "#000000",
    paddingVertical: 10,
    paddingLeft: 5,
 },
 inputContainer: {
 borderWidth: 2,
 width: '80%',
 },
 resultRow: {
     marginVertical: 10,
     marginHorizontal: 10,
 },
 details:{

 },
 })