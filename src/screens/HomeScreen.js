import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import GeneralStyle from '../styles/GeneralStyle';
import HomeStyle from '../styles/HomeStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PresenceItem from '../components/PresenceItem';
import MonthPickerModal from '../components/MontPickerModal';
import {useHudContext} from 'react-native-hud-view';
import Dialog from 'react-native-dialog';
import HomeApi from '../api/HomeApi';
import {loadData, deleteData} from '../utils/EncryptedStorageUtil';
import {useNavigation} from '@react-navigation/native';

const numColumns = 4; // Number of columns in the grid
const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export default function HomeScreen() {
  useEffect(() => {
    fetchUserData();
    fetchPresenceData();
    setSelectedMonth(currentMonthNumber);
  }, []);

  const date = new Date();
  const currentMonthNumber = date.getMonth();
  const [modalVisible, setModalVisible] = useState(false);
  const [presenceData, setPresenceData] = useState([]);
  const {show, hide} = useHudContext();
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const navigation = useNavigation();

  const isValidTime = timeString => {
    const regex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/;
    return regex.test(timeString);
  };

  const handleModalClose = selectedMonthValue => {
    setModalVisible(false);
    setSelectedMonth(selectedMonthValue);
  };

  const formatData = presenceData => {
    return presenceData.length < selectedMonth + 1
      ? []
      : presenceData[selectedMonth]['details'];
  };

  const renderItem = ({index, item}) => {
    return (
      <PresenceItem
        number={index + 1}
        isAlpha={item.status == 'Alpha'}
        isOut={isValidTime(item.out)}
        hour={item.in}
      />
    );
  };

  const fetchUserData = async () => {
    var userDataValue = await loadData('user');
    setUserData(userDataValue);
  };

  const getPreviousMonth = () => {
    setSelectedMonth(selectedMonth - 1);
  };

  const getNextMonth = () => {
    setSelectedMonth(selectedMonth + 1);
  };

  const fetchPresenceData = () => {
    show({name: 'circle-slice-1'}, {rotate: true});

    HomeApi.getUserDataInYear()
      .then(response => {
        setPresenceData(
          Object.entries(response).map(([month, records]) => ({
            month,
            details: records.map(record => ({
              in: record.in || 'Not Specified',
              out: record.out || 'Not Specified',
              status: record.statusPresence,
              isReturn: record.isReturn,
            })),
          })),
        );
        hide(); // Hide loading indicator
      })
      .catch(error => {
        hide();
        setDialogMessage(error.message || 'An unexpected error occurred');
        setDialogVisible(true);
      });
  };

  return (
    <View style={GeneralStyle.screenContainer}>
      <Image
        source={require('../image/screen_bg.png')}
        style={GeneralStyle.screenBackgroundImage}
      />
      <SafeAreaView style={HomeStyle.safeArea}>
        <View style={HomeStyle.header}>
          <TouchableOpacity
            onPress={() => {
              setDialogMessage('Anda Yakin Ingin Keluar?');
              setDialogVisible(true);
            }}>
            <Icon
              name="logout"
              size={25}
              color="black"
              style={HomeStyle.logoutIcon}
            />
          </TouchableOpacity>
          <Text style={HomeStyle.titleLabel}>ClockInEase</Text>
        </View>
        <Text style={HomeStyle.welcomeLabel}>Selamat datang,</Text>
        <View style={HomeStyle.profile}>
          <Icon name="account-circle" size={50} color="black" />
          <View style={HomeStyle.profileInfo}>
            <Text style={HomeStyle.profileName}>
              {userData != null && userData.user
                ? userData.user.name ?? ''
                : ''}
            </Text>
            <Text style={HomeStyle.profileEmail}>
              {userData != null && userData.user
                ? userData.user.email ?? ''
                : ''}
            </Text>
          </View>
        </View>
        <View style={HomeStyle.dateContainer}>
          <View style={{flexDirection: 'row'}}>
            {selectedMonth > 0 && (
              <TouchableOpacity
                style={{...HomeStyle.chevronButton, marginRight: 14}}
                onPress={getPreviousMonth}>
                <Icon
                  name="chevron-left"
                  size={25}
                  color="black"
                  style={HomeStyle.chevronIcon}
                />
              </TouchableOpacity>
            )}
            <View style={HomeStyle.monthContainer}>
              <Text style={HomeStyle.monthLabel}>{months[selectedMonth]}</Text>
            </View>
            {selectedMonth < currentMonthNumber && (
              <TouchableOpacity
                style={{
                  ...HomeStyle.chevronButton,
                  marginLeft: 14,
                }}
                onPress={getNextMonth}>
                <Icon
                  name="chevron-right"
                  size={25}
                  color="black"
                  style={HomeStyle.chevronIcon}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={{...HomeStyle.calenderButton, marginLeft: 14}}
            onPress={() => setModalVisible(true)}>
            <Icon
              name="calendar-range"
              size={24}
              color="black"
              style={HomeStyle.calenderIcon}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={formatData(presenceData)}
          style={HomeStyle.presenceListContainer}
          renderItem={renderItem}
          numColumns={numColumns}
        />

        <MonthPickerModal
          visible={modalVisible}
          onClose={handleModalClose}
          currentMonthNumber={currentMonthNumber + 1}
        />
        <TouchableOpacity>
          <Image
            source={require('../image/qr_button.png')}
            style={HomeStyle.qrButton}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <Dialog.Container visible={dialogVisible} statusBarTranslucent>
        <Dialog.Title>Information</Dialog.Title>
        <Dialog.Description>{dialogMessage}</Dialog.Description>
        <Dialog.Button
          label="Ok"
          onPress={async () => {
            setDialogVisible(false);
            await deleteData('user');
            setTimeout(() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'LoginScreen'}],
              });
            }, 500);
          }}
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => {
            setDialogVisible(false);
          }}
        />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({});
