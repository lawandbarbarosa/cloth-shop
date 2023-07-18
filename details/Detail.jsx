import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Footer from './Footer'

const Detail = ({images}) => {
  return (
    <View>
      <Background data={images} />
      <Footer />
    </View>
  )
}

export default Detail