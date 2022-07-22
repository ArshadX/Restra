import React from 'react';

import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const Swiper = ({imageUrl}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.imageStyle} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    backgroundColor: '#696969',
    marginHorizontal: 10,
  },
  imageStyle: {
    width: Dimensions.get('screen').width - 43,
    height: Dimensions.get('screen').height - 620,
  },
});
export default Swiper;
