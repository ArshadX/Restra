import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {defaultStyle} from '../styles/styles';

const ProfilePic = ({onPress, imageSrc}) => {
  return (
    <View style={defaultStyle.imageContainer}>
      <Pressable
        onPressIn={onPress}
        style={({pressed}) => [
          {color: pressed ? 'red' : 'white', zIndex: -1},
          null,
        ]}>
        <Image source={imageSrc} style={defaultStyle.image} />
      </Pressable>
    </View>
  );
};

export default ProfilePic;
