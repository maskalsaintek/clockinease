import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PresenceItemStyle from '../styles/PresenceItemStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PresenceItem = ({number, isOut = false, isAlpha = false, hour = ''}) => {
  return (
    <View
      style={{
        ...PresenceItemStyle.container,
        backgroundColor: isAlpha ? 'black' : '#1E90FF',
      }}>
      <View style={PresenceItemStyle.numberContainer}>
        <Text style={PresenceItemStyle.numberLabel}>{number}</Text>
        {!isAlpha && isOut && (
          <Icon name="check-circle" size={10} color="white" />
        )}
      </View>
      <Text style={PresenceItemStyle.statusLabel}>
        {isAlpha ? 'Alpha' : 'Hadir'}
      </Text>
      <Text style={PresenceItemStyle.hourLabel}>
        {!isAlpha && hour.slice(0, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    color: '#fff',
  },
});

export default PresenceItem;
