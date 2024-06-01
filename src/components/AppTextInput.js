import React from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/AppTextInputStyle';

const AppTextInput = ({
  label,
  leftIconName,
  rightIconName,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        {leftIconName && <Icon name={leftIconName} size={20} color="black" />}
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={styles.textInput}
          onChangeText={onChangeText}
        />
        {rightIconName && <Icon name={rightIconName} size={20} color="black" />}
      </View>
    </View>
  );
};

export default AppTextInput;
