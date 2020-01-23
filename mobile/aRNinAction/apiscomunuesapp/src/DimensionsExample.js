import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
let styles = {}

const { width, height } = Dimensions.get('window')
const windowWidth = Dimensions.get('window').width

const DimensionsExample = () => (
  <View style={styles.container}>
    <Text>Ancho: {width}</Text>
    <Text>Alto: {height}</Text>
    <Text>Ancho ventana: {windowWidth}</Text>
  </View>
)

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DimensionsExample
