import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    console.log('miaww');
    SplashScreen.hide();
  }, []);
  
  return (
    <View style={styles.container}>
      {/* Konten aplikasi Anda */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
