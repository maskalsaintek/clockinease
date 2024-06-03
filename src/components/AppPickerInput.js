import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';
import styles from '../styles/AppPickerInputStyle';

const AppPickerInput = ({
  label,
  placeholder,
  onValueChange,
  items,
  leftIconName,
  marginTop,
}) => {
  return (
    <View>
      {label && (
        <Text style={[styles.label, {marginTop: marginTop ?? 14}]}>
          {label}
        </Text>
      )}
      <View style={styles.container}>
        {leftIconName && <Icon name={leftIconName} size={20} color="black" />}
        <RNPickerSelect
          onValueChange={onValueChange}
          items={items}
          style={styles.textInput}
          useNativeAndroidPickerStyle={false}
          placeholder={{}}
        />
        <Icon name="menu-down" size={20} color="black" />
      </View>
    </View>
  );
};

export default AppPickerInput;
