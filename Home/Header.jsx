import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import logo from "../assets/logo.png"
import notification from "../assets/notification.png"

import bigovic from "../assets/bigovic.jpg"



const Header = () => {

  return (
    <View>
  <View style={styles.header}>
      <View>
      <Image source={logo} style={{width:50,height:50}} resizeMode='contain' />
      </View>
      <View>
      <Text style={{fontSize:'24rem',fontWeight:'700',}}>Home</Text>
      </View>

      <View>
      <Image source={notification} style={{width:30,height:30,color:'#A49C93'}} resizeMode='contain' />
      </View>
       
    </View>
    <View style={styles.headerapp}>
      <View style={styles.photoheader}>
      <Image source={bigovic} style={{marginHorizontal:15,width:40,height:40}} resizeMode='cover' />
      <Text style={{fontWeight:600,fontSize:25}}>Hi</Text>
      <Text style={{fontWeight:300,fontSize:25,marginLeft:7}}>barbarosa</Text>
      </View>
    </View>

    <View style={styles.headerText}>
      <Text numberOfLines={3} style={styles.text}>
      Let’s Check Cool Product,Fit Your Style
      </Text>
    </View>
    </View>
  
  )
}


const styles = StyleSheet.create({
header:{
flexDirection:'row',
justifyContent:'space-between',
padding:15,
marginTop:27
},
headerapp:{
  padding:15
},
photoheader:{
  display:'flex',
  flexDirection:'row',
},
headerText:{
  display:'flex',
  flex:'column',
 width:'75%',
 alignSelf:'center',
 marginTop:30
},
text:{
  textAlign:'center',
 fontSize:'30rem',
 fontWeight:'600',
}

})

export default Header