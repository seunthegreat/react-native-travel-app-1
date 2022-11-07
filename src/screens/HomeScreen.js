import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const container = {
  flex: 1, 
  justifyContent:"center",
  alignItems:'center', 

}