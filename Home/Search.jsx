import { View, Text,StyleSheet, TextInput,Image } from 'react-native'
import React from 'react'

import search from "../assets/search.png"

const Search = () => {
  return (
    <View style={styles.searchContainer}>
     <View style={styles.search}>
      <Image source={search} style={{width:32,height:32}} resizeMode='cover' />
     <TextInput
    placeholder='Search for cloth,cup,orpants....'
    style={{width:'70%'}}
    />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchContainer:{
        alignItems:'center',
        alignSelf:'center',
        marginTop:23,
        borderColor:'#FEFEFE',
        borderWidth:3,
        padding:15,
        borderRadius:17,
        backgroundColor:'#E6E6E6'
    },
    search:{
        flexDirection:'row',
        gap:17
    }
})

export default Search