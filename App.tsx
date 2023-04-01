
import React, { useState } from 'react';

import {

  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,

  View,
} from 'react-native';


function App(): JSX.Element {
  
 const [randomBackground, setRandomBackground]=useState("#ffffff")

 const [randomBackground2, setRandomBackground2]=useState("#ffffff")

 const generateColor=()=>{
    const color= Math.floor(Math.random()*16777215).toString(16);
    setRandomBackground("#"+color)
  }

  const generateColor2=()=>{
    const color= Math.floor(Math.random()*16777215).toString(16);
    setRandomBackground2("#"+color)
  }

  // const hexrange= "0123456789ABCDEF"
  // let color="#"

  // for (let i = 0; i < 6; i++) {
  //   color+=hexrange[Math.floor(Math.random()*16)]
    
 
  return (

  <>

  <StatusBar backgroundColor={randomBackground}/>

  <View style={[styles.shapeContainer,{backgroundColor:randomBackground}]}>
          <View style={[styles.circle, { backgroundColor: randomBackground2}]} />
      
          <View style={[styles.rectangle, { backgroundColor: randomBackground2 }]} />
        </View>

  <View style={[styles.container,{backgroundColor:randomBackground}]}>
  <Text style={{fontSize:24,fontWeight:"bold",textAlign:"center"}}>Random Color Generator</Text>
  
 




    <TouchableOpacity onPress={generateColor}>
      <View style={styles.actionBtn}>
        <Text style={styles.actionBtnText}>PRESS ME</Text>
      </View>
    </TouchableOpacity>

    <View style={[styles.circle, { backgroundColor: randomBackground }]} />

  </View>
  </>
   
  );
}

const styles = StyleSheet.create({

  shapeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFF',
    marginTop: 100,
  },
  
  rectangle: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#FFF',
    marginLeft: 20,
  },

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

  },
  actionBtn:{
    backgroundColor:"#120E43",
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:12,
    borderWidth:1,
    borderColor:"#fffff"

  },
  actionBtnText:{
   fontSize:24,
    color:"#fff",
    fontWeight:"bold"
  }
});

export default App;
