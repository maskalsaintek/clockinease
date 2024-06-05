import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import GeneralStyle from '../styles/GeneralStyle';
import RegisterStyle from '../styles/RegisterStyle';
import AppTextInput from '../components/AppTextInput';
import AppPickerInput from '../components/AppPickerInput';
import {useNavigation} from '@react-navigation/native';
import {useHudContext} from 'react-native-hud-view';
import RegisterApi from '../api/RegisterApi';
import Dialog from 'react-native-dialog';
import uuid from 'react-native-uuid';

export default function RegisterScreen() {
  const {show, hide} = useHudContext();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('pria');
  const [division, setDivision] = useState('-1');
  const [department, setDepartment] = useState('-1');
  const [branch, setBranch] = useState('-1');
  const [position, setPosition] = useState('staff');
  const [divisionPicker, setDivisionPicker] = useState([
    {label: 'Nama Pilihan Divisi', value: '-1'},
  ]);
  const [departmentPicker, setDepartmentPicker] = useState([
    {label: 'Nama Pilihan Departemen', value: '-1'},
  ]);
  const [branchPicker, setBranchPicker] = useState([
    {label: 'Nama Pilihan Cabang', value: '-1'},
  ]);
  const navigation = useNavigation();
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    fetchDivision();
    fetchBranch();
  }, []);

  const fetchDivision = () => {
    hide();
    show({name: 'circle-slice-1'}, {rotate: true});

    RegisterApi.getAllDivisions()
      .then(async response => {
        setDivisionPicker(
          response.map(division => ({
            label: division.name,
            value: division.id,
          })),
        );
        hide();
      })
      .catch(error => {
        hide();
        setDialogMessage(error.message);
        setDialogVisible(true);
      });
  };

  const fetchDepartment = id => {
    hide();
    show({name: 'circle-slice-1'}, {rotate: true});

    RegisterApi.getDepartment(id)
      .then(async response => {
        setDepartmentPicker(
          response.map(division => ({
            label: division.name,
            value: division.id,
          })),
        );
        hide();
      })
      .catch(error => {
        hide();
        setDialogMessage(error.message);
        setDialogVisible(true);
      });
  };

  const fetchBranch = () => {
    hide();
    show({name: 'circle-slice-1'}, {rotate: true});

    RegisterApi.getBranches()
      .then(async response => {
        setBranchPicker(
          response.map(division => ({
            label: division.name,
            value: division.id,
          })),
        );
        hide();
      })
      .catch(error => {
        hide();
        setDialogMessage(error.message);
        setDialogVisible(true);
      });
  };

  const submitRegister = () => {
    var errorMessage = '';
    hide();

    if (!fullName) {
      errorMessage = 'Full name is required';
    } else if (!phoneNumber) {
      errorMessage = 'Phone number is required';
    } else if (!email) {
      errorMessage = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorMessage = 'Email is not valid';
    } else if (!password) {
      errorMessage = 'Password is required';
    } else if (!gender) {
      errorMessage = 'Gender is required';
    } else if (division == '-1') {
      errorMessage = 'Division is required';
    } else if (department == '-1') {
      errorMessage = 'Department is required';
    } else if (branch == '-1') {
      errorMessage = 'Branch is required';
    } else if (branch == '-1') {
      errorMessage = 'Branch is required';
    } else if (position == '-1') {
      errorMessage = 'Position is required';
    }

    if (errorMessage) {
      setDialogMessage(errorMessage);
      setDialogVisible(true);
      return;
    }

    show({name: 'circle-slice-1'}, {rotate: true});

    var userData = {
      name: fullName,
      gender: gender,
      email: email,
      phone_number: phoneNumber,
      password: password,
      division: division,
      department: department,
      branch: branch,
      position: position,
      device_model: uuid.v4(),
    };

    RegisterApi.register(userData)
      .then(async response => {
        hide();
        console.log('Register Successful:', response);
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
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
            onValueChange={value => setGender(value)}
            marginTop={26}
            items={[
              {label: 'Pria', value: 'pria'},
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
            onValueChange={value => {
              setDivision(value);
              fetchDepartment(value);
            }}
            marginTop={26}
            items={divisionPicker}
          />
          <AppPickerInput
            leftIconName="domain"
            label="Pilih Departemen"
            placeholder="Nama Pilihan Departemen"
            onValueChange={value => {
              setDepartment(value);
            }}
            marginTop={26}
            items={departmentPicker}
          />
          <AppPickerInput
            leftIconName="source-merge"
            label="Pilih Cabang"
            placeholder="Nama Pilihan Cabang"
            onValueChange={value => {
              setBranch(value);
            }}
            marginTop={26}
            items={branchPicker}
          />

          <AppPickerInput
            leftIconName="account-supervisor"
            label="Pilih Jabatan"
            placeholder="Staff"
            onValueChange={value => {
              setPosition(value);
            }}
            marginTop={26}
            items={[
              {label: 'Staff', value: 'staff'},
              {label: 'Supervisor', value: 'supervisor'},
              {label: 'Manager', value: 'manager'},
            ]}
          />

          <TouchableOpacity
            style={RegisterStyle.registerButton}
            activeOpacity={0.6}
            onPress={submitRegister}>
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
      </SafeAreaView>
    </View>
  );
}
