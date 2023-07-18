import { View, Text,StyleSheet,Image,scrollX, ScrollView} from 'react-native'
import React from 'react'

import start from "../assets/start.png"
import shopping from "../assets/shopping.png"

const Footer = () => {

    const sizes =[
        {id:1,size:'S'},
        {id:1,size:'M'},
        {id:1,size:'L'},
        {id:1,size:'XL'},
        {id:1,size:'XXL'},
    ]

  return (
    <ScrollView style={styles.footerContainer}>
      <View style={styles.footer}>
       <Text style={{fontSize:40,fontWeight:800,textAlign:'center'}} numberOfLines={2}>Casual Jeans Pant</Text>
      </View>
      <View style={styles.details}>
      <Image source={start} resizeMode='cover' style={{width:30,height:30}} />
      <Text style={{fontSize:30}}>5.6</Text>
      </View>
      <Text style={{fontSize:25,paddingLeft:12}}>(2.6k+reviews)</Text>
      <Text style={{fontSize:19,paddingLeft:12,marginTop:12}}>Select Size</Text>
      <View style={styles.size}>
      {sizes.map((item)=>(
        <Text style={{fontSize:19}} key={item.id}>{item.size}</Text>
      ))}
      </View>
      <View style={{flexDirection:'row',alignItems:'center',gap:52}}>
       <View style={{backgroundColor:'#282828',
       padding:22,flexDirection:'row',gap:12,alignItems:'center',width:227,marginLeft:12,marginTop:12,borderRadius:15}}>
        <Image source={shopping} resizeMode='cover' />
        <Text style={{color:'white',fontWeight:700}}>Add To cart</Text>
       </View>
       <Text style={{fontSize:18,fontWeight:500}}>40$</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    footerContainer:{
        backgroundColor:'#F5EFE6',
        width:'100%',
        height:'40%',
      position:'absolute',
      bottom:0,
      borderRadius:22,
    },
    footer:{
        padding:15
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        gap:12,
        marginLeft:17
    },
    size:{
        backgroundColor:'#fff',
        width:220,
        padding:15,
        marginLeft:12,
        marginTop:12,
        flexDirection:'row',
        alignItems:'center',
        gap:15,
        borderRadius:16
    }
})

export default Footer