import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import imag1 from "../assets/image1.jpg"
import imag2 from "../assets/image2.jpg"
import imag3 from "../assets/image3.jpg"
import imag4 from "../assets/image4.jpg"
import imag5 from "../assets/image5.jpg"


const Items = () => {

    const item =[
        {id:1,name:'pant',image:imag1},
        {id:2,name:'hoodle',image:imag2},
        {id:3,name:'cap',image:imag3},
        {id:4,name:'t-shirt',image:imag4},
    ]
  return (
    <View style={styles.itemcontainer}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Category</Text>
      <View style={styles.item}>
       {item.map((cloth)=>(
        <TouchableOpacity key={cloth.id}>
            <Image source={cloth.image} resizeMode='cover'
             style={{width:70,height:55,borderRadius:12,position:'relative'}} />
             <View style={{backgroundColor:'#1B1A17',
             position:'absolute',
             width:'100%',height:'100%',
             opacity:0.7,borderRadius:12
             }} />
             <Text style={{position:'absolute',
             bottom:12,textAlign:'center',left:12,color:'white',
             fontSize:15,fontWeight:'300',}}>{cloth.name}</Text>
        </TouchableOpacity>
       ))}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    itemcontainer:{
    paddingLeft:17,
    marginTop:19,
    marginBottom:25
    },
    item:{
        flexDirection:'row',
        gap:12,
        marginTop:12,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Items