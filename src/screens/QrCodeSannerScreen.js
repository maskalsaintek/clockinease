import {ModernQRScanner} from 'react-native-modern-qrscanner';
import {StyleSheet, View, Image, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import GeneralStyle from '../styles/GeneralStyle';
import HomeStyle from '../styles/HomeStyle';
import {useNavigation} from '@react-navigation/native';

export default function QrCodeSannerScreen() {
  const navigation = useNavigation();

  return (
    <View style={GeneralStyle.screenContainer}>
      <Image
        source={require('../image/screen_bg.png')}
        style={GeneralStyle.screenBackgroundImage}
      />
      <SafeAreaView
        style={{
          ...HomeStyle.safeArea,
          padding: Platform.OS === 'ios' ? 20 : 0,
        }}>
        <ModernQRScanner
          onRead={data => {
            console.log('QR code detected:', data);
            navigation.navigate('HomeScreen', {response: data});
          }}
          rectHeight={Dimensions.get('window').width}
          rectWidth={Dimensions.get('window').width}
          cornerColor="white"
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
