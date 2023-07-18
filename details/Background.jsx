import { View, Text,StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'

import image1 from "../assets/image1.jpg"

import arrow from "../assets/arrow.png"

import heart from "../assets/heart.png"

const Background = ({data,route,navigation}) => {
  return (
    <View style={styles.imagebackgroundcontainer}>
        <View style={styles.headerback}>
            <View style={styles.dwam}>
            <Image source={arrow} onPress={()=> navigation.goback()} style={{width:27,height:27,zIndex:200}} />
      <Image source={heart} style={{width:27,height:27}}/>
            </View>
        </View>
<Image source={image1} 
style={{width:'100%',height:'90%',position:'relative'}} 
resizeMode='cover' />
<View style={{width:'100%',height:'90%',
position:'absolute',backgroundColor:"#D0943A",
opacity:0.3,
}} />
    </View>
   
  )
}


const styles = StyleSheet.create({
    headerback:{
   position:'absolute',
   zIndex:200
    },
    dwam:{
        padding:15,
        flexDirection:'row',
        gap:'288',
        alignItems:'center',
        justifyContent:'space-between',
        zIndex:18,
        marginTop:35
    }
})

export default Background