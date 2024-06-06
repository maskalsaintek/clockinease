import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalPickerMonthStyle from '../styles/MonthPickerModalStyle';

const months = [
  {id: '1', name: 'January'},
  {id: '2', name: 'February'},
  {id: '3', name: 'March'},
  {id: '4', name: 'April'},
  {id: '5', name: 'May'},
  {id: '6', name: 'June'},
];

const MonthPickerModal = ({visible, onClose}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={ModalPickerMonthStyle.item}
      onPress={() => onClose(item.name)}>
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
            data={months}
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
