import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import GeneralStyle from '../styles/GeneralStyle';
import HomeStyle from '../styles/HomeStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PresenceItem from '../components/PresenceItem';
import MonthPickerModal from '../components/MontPickerModal';

const numColumns = 4; // Number of columns in the grid

export default function HomeScreen() {
  const data = [
    {key: '1', text: 'Item 1'},
    {key: '2', text: 'Item 2'},
    {key: '3', text: 'Item 3'},
    {key: '4', text: 'Item 4'},
    {key: '5', text: 'Item 5'},
    {key: '6', text: 'Item 6'},
    {key: '1', text: 'Item 1'},
    {key: '2', text: 'Item 2'},
    {key: '3', text: 'Item 3'},
    {key: '4', text: 'Item 4'},
    {key: '5', text: 'Item 5'},
    {key: '6', text: 'Item 6'},
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClose = selectedMonth => {
    setModalVisible(false);
    console.log('Selected Month:', selectedMonth);
  };

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }
    return data;
  };

  const renderItem = ({item}) => {
    return <PresenceItem text={item.text} />;
  };

  return (
    <View style={GeneralStyle.screenContainer}>
      <Image
        source={require('../image/screen_bg.png')}
        style={GeneralStyle.screenBackgroundImage}
      />
      <SafeAreaView style={HomeStyle.safeArea}>
        <View style={HomeStyle.header}>
          <Icon
            name="logout"
            size={25}
            color="black"
            style={HomeStyle.logoutIcon}
          />
          <Text style={HomeStyle.titleLabel}>ClockInEase</Text>
        </View>
        <Text style={HomeStyle.welcomeLabel}>Selamat datang,</Text>
        <View style={HomeStyle.profile}>
          <Icon name="account-circle" size={50} color="black" />
          <View style={HomeStyle.profileInfo}>
            <Text style={HomeStyle.profileName}>Radiant Fadilah</Text>
            <Text style={HomeStyle.profileEmail}>user@email.com</Text>
          </View>
        </View>
        <View style={HomeStyle.dateContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={HomeStyle.chevronButton}>
              <Icon
                name="chevron-left"
                size={25}
                color="black"
                style={HomeStyle.chevronIcon}
              />
            </TouchableOpacity>
            <View style={HomeStyle.monthContainer}>
              <Text style={HomeStyle.monthLabel}>Mei</Text>
            </View>
            <TouchableOpacity style={HomeStyle.chevronButton}>
              <Icon
                name="chevron-right"
                size={25}
                color="black"
                style={HomeStyle.chevronIcon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={HomeStyle.calenderButton}
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
          data={formatData(data, numColumns)}
          style={HomeStyle.presenceListContainer}
          renderItem={renderItem}
          numColumns={numColumns}
        />

        <MonthPickerModal visible={modalVisible} onClose={handleModalClose} />
        <TouchableOpacity>
          <Image
            source={require('../image/qr_button.png')}
            style={HomeStyle.qrButton}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
