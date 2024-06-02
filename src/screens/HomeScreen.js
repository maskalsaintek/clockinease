import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff', // Latar belakang putih
        }}>
        <Text
          style={{fontSize: 30, alignContent: 'center', alignSelf: 'center'}}>
          HomeScreen
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
