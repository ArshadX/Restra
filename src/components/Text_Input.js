import React from 'react';
import {TextInput} from 'react-native';
import {AuthContext} from '../container/nav/AuthProvider';
const Text_Input = ({placeholder, onChangeText, style, onBlur, Secure}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={style}
      onBlur={onBlur}
      placeholderTextColor="#e4e4e4"
      selectionColor="#000000"
      secureTextEntry={Secure}
    />
  );
};

export default Text_Input;
