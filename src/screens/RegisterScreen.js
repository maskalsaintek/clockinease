import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import GeneralStyle from '../styles/GeneralStyle';
import RegisterStyle from '../styles/RegisterStyle';
import AppTextInput from '../components/AppTextInput';
import AppPickerInput from '../components/AppPickerInput';
import {useNavigation} from '@react-navigation/native';

export default function RegisterScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={GeneralStyle.screenContainer}>
      <Image
        source={require('../image/screen_bg.png')}
        style={GeneralStyle.screenBackgroundImage}
      />
      <SafeAreaView>
        <ScrollView style={RegisterStyle.container}>
          <Text style={RegisterStyle.title}>Daftar</Text>
          <AppTextInput
            label="Nama Lengkap"
            leftIconName="account-circle"
            placeholder="Masukan nama..."
            marginTop={26}
            onChangeText={value => {
              setFullName(value);
            }}
          />
          <AppPickerInput
            leftIconName="human-male-female"
            label="Pilih Gender"
            placeholder="Pria"
            onValueChange={value => console.log(value)}
            marginTop={26}
            items={[
              {label: 'Pria', value: 'male'},
              {label: 'Wanita', value: 'female'},
            ]}
          />
          <AppTextInput
            label="Nomor Telepon"
            leftIconName="phone"
            placeholder="08123456789"
            keyboardType="phone"
            marginTop={26}
            onChangeText={value => {
              setPhoneNumber(value);
            }}
          />
          <AppTextInput
            label="Email"
            leftIconName="email"
            placeholder="contoh@email.com"
            keyboardType="email"
            marginTop={26}
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
            marginTop={26}
            onChangeText={value => {
              setPassword(value);
            }}
            onRightIconPress={() => {
              setPasswordVisible(!passwordVisible);
            }}
          />
          <AppPickerInput
            leftIconName="office-building"
            label="Pilih Divisi"
            placeholder="Nama Pilihan Divisi"
            onValueChange={value => console.log(value)}
            marginTop={26}
            items={[{label: 'Nama Pilihan Divisi', value: 'male'}]}
          />
          <AppPickerInput
            leftIconName="domain"
            label="Pilih Departemen"
            placeholder="Nama Pilihan Departemen"
            onValueChange={value => console.log(value)}
            marginTop={26}
            items={[{label: 'Nama Pilihan Departemen', value: 'male'}]}
          />
          <AppPickerInput
            leftIconName="source-merge"
            label="Pilih Cabang"
            placeholder="Nama Pilihan Cabang"
            onValueChange={value => console.log(value)}
            marginTop={26}
            items={[{label: 'Nama Pilihan Cabang', value: 'male'}]}
          />

          <AppPickerInput
            leftIconName="account-supervisor"
            label="Pilih Jabatan"
            placeholder="Staff"
            onValueChange={value => console.log(value)}
            marginTop={26}
            items={[{label: 'Staff', value: 'male'}]}
          />

          <TouchableOpacity
            style={RegisterStyle.registerButton}
            activeOpacity={0.6}>
            <Text style={RegisterStyle.registerButtonLabel}>Daftar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={RegisterStyle.loginButton}
            activeOpacity={0.2}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'LoginScreen'}],
              });
            }}>
            <Text style={RegisterStyle.loginButtonLabel}>Kembali</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
