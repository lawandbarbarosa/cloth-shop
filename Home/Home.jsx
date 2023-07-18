import { View, Text,StyleSheet,FlatList, ScrollView } from 'react-native'
import React from 'react'


import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Search from './Search'
import Category from './Category'
import HomeContent from './HomeContent'
import Items from './Items'
import Cloths from './Cloths'

const Home = () => {
  return (
    <ScrollView style={styles.homecontainer} >
      <Header />
      <Search />
      <Category />
      <HomeContent />
      <Items />
      <Cloths />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  homecontainer:{
    flex:2
  }
})

export default Home