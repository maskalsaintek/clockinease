import React from 'react';
import {Modal, View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalPickerMonthStyle from '../styles/MonthPickerModalStyle';

const months = [
  {id: 0, name: 'Januari'},
  {id: 1, name: 'Februari'},
  {id: 2, name: 'Maret'},
  {id: 3, name: 'April'},
  {id: 4, name: 'Mei'},
  {id: 5, name: 'Juni'},
  {id: 7, name: 'Juli'},
  {id: 8, name: 'Agustus'},
  {id: 9, name: 'September'},
  {id: 10, name: 'Oktober'},
  {id: 11, name: 'November'},
  {id: 12, name: 'Desember'},
];

const MonthPickerModal = ({visible, onClose, currentMonthNumber = 12}) => {
  const renderItem = ({index, item}) => (
    <TouchableOpacity
      style={ModalPickerMonthStyle.item}
      onPress={() => onClose(index)}>
      <Text style={ModalPickerMonthStyle.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={ModalPickerMonthStyle.overlay}>
        <View style={ModalPickerMonthStyle.dialog}>
          <View style={ModalPickerMonthStyle.header}>
            <Icon name="calendar-range" size={24} color="black" />
            <Text style={ModalPickerMonthStyle.title}>Pilih Bulan</Text>
            <TouchableOpacity onPress={() => onClose()}>
              <Icon name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={months.slice(0, currentMonthNumber)}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={ModalPickerMonthStyle.list}
          />
        </View>
      </View>
    </Modal>
  );
};

export default MonthPickerModal;
