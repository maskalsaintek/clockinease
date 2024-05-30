import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./src/image/screen_bg.png')} style={{ width: width, height: height, position: 'absolute'}} />
      <Image source={require('./src/image/qr_logo.png')} style={{ width: 96, height: 96 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
