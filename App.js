import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';

const getFonts = () =>Font.loadAsync({
    'LR': require('./assets/font/LeagueGothic-Regular.ttf'),
    'LC': require('./assets/font/LeagueGothic_Condensed-Regular.ttf')
  });



export default function App() {
  const [fontsLoaded,setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return(
      <Navigator/>
    )
  }else{
    return(
      <AppLoading startAsync={getFonts} onFinish={()=>setFontsLoaded(true)} onError={()=>console.log('error')}/>
    )
  }

}


