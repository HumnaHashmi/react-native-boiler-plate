import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import DrawerIcon from '../../components/DrawerIcon'
import { Metrix } from '../../config/theme'
const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DrawerIcon />
      <Text style={styles.text}>Home</Text>
      <></>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    marginHorizontal:Metrix.HorizontalSize(20),
    marginTop:Metrix.VerticalSize(20)
  },
  text:{
   textAlign:'center'
  }
})