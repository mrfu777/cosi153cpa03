import React from "react";
import { Text, View , Button} from 'react-native';
import { globalstyles } from "../style/global";

export default function ReviewDetails({navigation}) {
  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalstyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Text style={globalstyles.title1}>{navigation.getParam('title')}</Text>
      <Text style={globalstyles.title1}>{navigation.getParam('body')}</Text>
      <Text style={globalstyles.title1}>{navigation.getParam('rating')}</Text>
      <Button title="Go Back" onPress={pressHandler}/>
    </View>
  );

}
  
