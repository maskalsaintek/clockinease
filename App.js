import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/routes';

export default function App() {
  useEffect(() => {
    console.log('miaww');
    SplashScreen.hide();
  }, []);
  
  return <Navigation/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
