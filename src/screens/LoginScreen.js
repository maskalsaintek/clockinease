import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GeneralStyle from '../styles/GeneralStyle';
import LoginStyle from '../styles/LoginStyle';
import AppTextInput from '../components/AppTextInput';
import {useHudContext} from 'react-native-hud-view';
import Dialog from 'react-native-dialog';
import LoginApi from '../api/LoginApi';
import {saveData} from '../utils/EncryptedStorageUtil';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const {show, hide} = useHudContext();
  const [dialogVisible, setDialogVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const navigation = useNavigation();

  const submitLogin = () => {
    var errorMessage = '';
    hide();

    if (!email) {
      errorMessage = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorMessage = 'Email is not valid';
    } else if (!password) {
      errorMessage = 'Password is required';
    }

    if (errorMessage) {
      setDialogMessage(errorMessage);
      setDialogVisible(true);
      return;
    }

    show({name: 'circle-slice-1'}, {rotate: true});

    LoginApi.login(email, password)
      .then(async response => {
        hide();
        await saveData('user', response);
        console.log('Login Successful:', response);
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeScreen'}],
        });
      })
      .catch(error => {
        hide();
        setDialogMessage(error.message);
        setDialogVisible(true);
      });
  };

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
          onChangeText={value => {
            setEmail(value);
          }}
        />

        <AppTextInput
          label="Password"
          leftIconName="lock"
          rightIconName={passwordVisible ? 'eye' : 'eye-off'}
          placeholder="Kata sandi..."
          secureTextEntry={!passwordVisible}
          onChangeText={value => {
            setPassword(value);
          }}
          onRightIconPress={() => {
            setPasswordVisible(!passwordVisible);
          }}
        />

        <TouchableOpacity
          style={LoginStyle.loginButton}
          activeOpacity={0.6}
          onPress={submitLogin}>
          <Text style={LoginStyle.LoginButtonLabel}>Masuk</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={LoginStyle.RegisterButton}
          activeOpacity={0.2}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'RegisterScreen'}],
            });
          }}>
          <Text style={LoginStyle.RegisterButtonLabel}>Daftar</Text>
        </TouchableOpacity>
        <Dialog.Container visible={dialogVisible} statusBarTranslucent>
          <Dialog.Title>Information</Dialog.Title>
          <Dialog.Description>{dialogMessage}</Dialog.Description>
          <Dialog.Button
            label="Ok"
            onPress={() => {
              setDialogVisible(false);
            }}
          />
        </Dialog.Container>
      </View>
    </View>
  );
}
