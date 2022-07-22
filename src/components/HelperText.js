import React from 'react';
import {View, Text} from 'react-native';
import {defaultStyle} from '../styles/styles';

const HelperText = ({isValid, isBlank}) => {
  return (
    <View style={defaultStyle.helperTextContainer}>
      {isValid ? (
        <Text> </Text>
      ) : (
        <Text style={defaultStyle.helperText}>Invalid</Text>
      )}
      {isBlank ? <Text style={defaultStyle.helperText}>required</Text> : null}
    </View>
  );
};

export default HelperText;
