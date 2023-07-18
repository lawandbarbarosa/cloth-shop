import { View, Text,StyleSheet,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Category = () => {

  const ragaz = [
    {id:1,ragaz:'Men'},
    {id:2,ragaz:'Women'},
    {id:3,ragaz:'Child'},
    {id:4,ragaz:'Old'},
  ]

  const navigation = useNavigation()

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.category}>
        {ragaz.map((item)=>(
         <TouchableOpacity style={styles.buttons} key={item.id}>
          <Button title={item.ragaz} color='black' style={styles.buttons} />
         </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContainer:{
  marginTop:12
  },
  category:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  buttons:{
    backgroundColor:'#E6E6E6',
    borderWidth:2,
    paddingHorizontal:3,
    marginHorizontal:4,
    borderRadius:12,
    borderColor:'#EDC391'
  },
})

export default Category