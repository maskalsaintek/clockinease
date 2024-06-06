import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PresenceItemStyle from '../styles/PresenceItemStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PresenceItem = ({text}) => {
  return (
    <View style={PresenceItemStyle.container}>
      <View style={PresenceItemStyle.numberContainer}>
        <Text style={PresenceItemStyle.numberLabel}>1</Text>
        <Icon name="check-circle" size={10} color="white" />
      </View>
      <Text style={PresenceItemStyle.statusLabel}>Hadir</Text>
      <Text style={PresenceItemStyle.hourLabel}>17:45</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    color: '#fff',
  },
});

export default PresenceItem;
