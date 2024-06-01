import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import GeneralStyle from '../styles/GeneralStyle';
import LoginStyle from '../styles/LoginStyle';
import AppTextInput from '../components/AppTextInput';

export default function LoginScreen() {
  return (
    <View style={GeneralStyle.screenContainer}>
      <Image
        source={require('../image/screen_bg.png')}
        style={GeneralStyle.screenBackgroundImage}
      />
      <View style={LoginStyle.container}>
        <Text style={LoginStyle.title}>Masuk</Text>
        <AppTextInput
          label="Email"
          leftIconName="email"
          placeholder="contoh@email.com"
          keyboardType="email"
        />

        <AppTextInput
          label="Password"
          leftIconName="lock"
          rightIconName="eye"
          placeholder="Kata sandi..."
          secureTextEntry={true}
        />

        <TouchableOpacity style={LoginStyle.loginButton} activeOpacity={0.6}>
          <Text style={LoginStyle.LoginButtonLabel}>Masuk</Text>
        </TouchableOpacity>

        <TouchableOpacity style={LoginStyle.RegisterButton} activeOpacity={0.6}>
          <Text style={LoginStyle.RegisterButtonLabel}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
