import React, { useState } from "react";
import { StyleSheet, Text, View , Button, FlatList, TouchableOpacity} from 'react-native';
import { globalstyles } from "../style/global";

export default function Home({navigation}) {
  const [reviews,setReviews]=useState([
    {title:'LeBron James', rating:38, body:'Lakers', key:'1'},
    {title:'Stephen Curry', rating:34, body:'Warriors', key:'2'},
    {title:'Kevin Durant', rating:34, body:'Nets', key:'3'},
    {title:'James Harden', rating:33, body:'76', key:'4'},
    {title:'Antetokounmpo', rating:28, body:'Bucks', key:'5'},
  ]);

  const pressHandler = () => {
    navigation.push('ReviewDetails');
  }

  return (
    <View style={globalstyles.container}>
      <Text style={globalstyles.title}>NBA</Text>
      <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
            <Text style={globalstyles.title1}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Review details" onPress={pressHandler}/>
    </View>
 );
}
  