import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput,TouchableOpacity, SafeAreaView, SectionList} from 'react-native';
import uuid from 'react-native-uuid';

const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

const RenderItemDetails = ({item}) =>{
    return(
    <TouchableOpacity>
        <View style = {styles.resultRow}>
            <Text style = {{fontSize: 16, fontWeight: "bold", fontStyle: "italic"}}>{item.Name}</Text>
            <View style = {styles.details}>
               {!!item.Cultivar && <View style = {styles.textContainer} ><Text style = {styles.boldTitle}>Cultivar:</Text><Text style = {styles.detail}> {item.Cultivar}</Text></View>}
               {!!item["Cutting Type"] && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Cutting Type:</Text><Text style = {styles.detail}>  {item["Cutting Type"]}</Text></View>}
               {!!item["Age-Stage"] && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Age-Stage:</Text><Text style = {styles.detail}> {item["Age-Stage"]}</Text></View>}
               {!!item["When Taken"] && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>When Taken:</Text><Text style = {styles.detail}> {item["When Taken"]}</Text></View>}
               {!!item.Medium && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Medium:</Text><Text style = {styles.detail}> {item.Medium}</Text></View>}
               {!!item["Auxin"] && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Auxin:</Text><Text style = {styles.detail}> {item["Auxin"]}</Text></View>}
               {!!item["Structure"] && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Structure:</Text><Text style = {styles.detail}> {item["Structure"]}</Text></View>}
               {!!item["Bottom Heat"] && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Bottom Heat:</Text><Text style = {styles.detail}> {item["Bottom Heat"]}</Text></View>}
               {!!item["% Rooting"] && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>% Rooting:</Text><Text style = {styles.detail}> {item["% Rooting"]}</Text></View>}
               {!!item["Time to Root"] && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Time to Root:</Text><Text style = {styles.detail}> {item["Time to Root"]}</Text></View>}
               {!!item.Care && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Care:</Text><Text style = {styles.detail}> {item.Care}</Text></View>}
               {!!item.Location && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Location:</Text><Text style = {styles.detail}> {item.Location}</Text></View>}
               {!!item.Reference && <View style = {styles.textContainer}><Text style = {styles.boldTitle}>Reference:</Text><Text style = {styles.detail}> {item.Reference}</Text></View>}
             </View>
        </View>
    </TouchableOpacity>
    )
}

const RenderSectionList = props =>{
    const {searchResults} = props;
    const [data, setData] = useState([])

    useEffect(()=>{
    if(searchResults.length !== 0){
        setData(searchResults.map(item =>{
                    var arr = [];
                    arr.push(item)
                        return {
                            title: item.name,
                            data: arr.map(val => val),
                        }
                    }))
        }
        else{
            setData([])
        }
    }, [searchResults])


return(
    <View>
        <SectionList
            sections = {data}
            renderItem = {RenderItemDetails}
            renderSectionHeader={renderSectionHeader}
            keyExtractor = {(item, index) =>{return index.toString()}}
        />
    </View>
)
}

export default RenderSectionList;

 const styles = StyleSheet.create({
 resultRow: {
     marginVertical: 10,
     marginHorizontal: 10,
     backgroundColor: "#daf2e0",
     flexWrap: "wrap",
 },
 boldTitle:{
    fontWeight: 'bold',
 },
 textContainer:{
     flexDirection: "row",
     width: '100%',
     paddingRight: 10,
 },
 detail:{
    flexWrap: "wrap",
    flexShrink: 1,

 },
 })