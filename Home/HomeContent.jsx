import { View, Text,StyleSheet,ScrollView, Image } from 'react-native'
import React from 'react'

import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import heart from "../assets/heart.png"
import { useNavigation } from '@react-navigation/native'



const HomeContent = () => {

    const navigation = useNavigation()

    const images = [
        {id:1,image:image1,icon:heart,name:'Cloth',price:'40$'},
        {id:2,image:image2,icon:heart,name:'t-shirt',price:'65$'},
        {id:3,image:image3,icon:heart,name:'Cup',price:'40$'},
        {id:4,image:image4,icon:heart,name:'Pant',price:'30$'},
        {id:5,image:image5,icon:heart,name:'hoodle',price:'22$'},
        {id:6,image:image6,icon:heart,name:'Cloth',price:'70$'},
    ]

  return (
    <ScrollView style={styles.homeContentContainer}>
     <View style={styles.header}>
    <Text style={styles.text}>New Items</Text>
     </View>
     <View style={styles.content}>
     <ScrollView style={{marginTop:14}} horizontal>
        {images.map((img)=>(
            <View key={img.id} style={styles.cont} onPress={()=> navigation.navigate('detail') } >
           <Image source={img.image}
            style={{width:180,
            height:240,
            marginHorizontal:6,
            borderRadius:12,position:'relative'
            }} resizeMode='cover' />
            <View style={styles.mask}/>
            <View style={styles.contentCloth}>
             <Image source={img.icon} resizeMode='contain' style={{color:'white'}} />
             <Text style={{color:'black',fontSize:12,fontWeight:'700',color:'black'}}
             onPress={()=> navigation.navigate('detail',{images}) }
             >{img.name}</Text>
             <Text style={{fontWeight:'700'}}>{img.price}</Text>
            </View>
            </View>
        ))}
     </ScrollView>
     </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    homeContentContainer:{
        paddingHorizontal:26,
        marginTop:15
    },
    text:{
        fontSize:'25rem',
        fontWeight:700,
    },
    cont:{
        position:'relative'
    },
    mask:{
        backgroundColor:'#9F87728A',
        width:'94%',
        height:'100%',
        zIndex:12,
        position:'absolute',
        borderRadius:12,
        marginHorizontal:6,
    },
    contentCloth:{
        zIndex:52,
        backgroundColor:'#FFBF9B',
        position:'absolute',
        bottom:7,
        left:10,
        width:'90%',
        height:42,
        borderColor:'white',
        borderRadius:22,
        padding:10,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        color:'white',
        opacity:0.8
    }
})

export default HomeContent