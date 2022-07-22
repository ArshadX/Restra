import React from 'react';

import {Pressable, Text, StyleSheet} from 'react-native';
import {buttonStyles} from '../styles/styles';

const Button = ({title, onPress, disabled}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        pressed ? buttonStyles.pressIn : buttonStyles.pressOut,
        buttonStyles.pressableStyle,
        disabled ? {backgroundColor: '#696969'} : null,
      ]}>
      <Text style={buttonStyles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;
