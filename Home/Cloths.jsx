import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"


import heart from "../assets/heart.png"

const Cloths = () => {
    const collection = [
        {id:1,name:'t-shirt',price:'40$',icon:heart,image:image1},
        {id:2,name:'Pants',price:'25$',icon:heart,image:image2},
        {id:3,name:'Cup',price:'30$',icon:heart,image:image3},
        {id:4,name:'cloth',price:'47$',icon:heart,image:image4},
        {id:5,name:'hoodle',price:'90$',icon:heart,image:image5},
        {id:5,name:'Jacket',price:'30$',icon:heart,image:image6},
    ]
  return (
    <View style={styles.collectioncontainer}>
        <View style={styles.collections} >
        <Text 
        style={{fontSize:25,
        fontWeight:'bold'}}>
        Collections
      </Text>
      <View style={styles.collect}>
        {collection.map((collect)=>(
            <View style={{marginTop:23}} key={collect.id}>
             <Image resizeMode='cover'
             source={collect.image} 
             style={styles.image} />
             <View style={styles.footer}>
                <Image source={collect.icon} resizeMode='cover'
                 style={{width:20,height:20,zIndex:200,color:'white'}} 
                 />
                 <Text style={{color:'white',fontWeight:'200',fontSize:12,}}>{collect.name}</Text>
                 <Text style={{color:'white',fontSize:12}}>{collect.price}</Text>
             </View>
            </View>
        ))}
      </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    collectioncontainer:{
    padding:12
    },

    collect:{
        gap:14,
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
},

image:{
width:140,
height:170,
borderRadius:14,
position:'relative'
},
footer:{
    backgroundColor:'#2D251C',
    position:'absolute',
    width:'90%',
    height:'30%',
    bottom:5,
    borderRadius:13,
    padding:12,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    gap:12
}

})

export default Cloths;