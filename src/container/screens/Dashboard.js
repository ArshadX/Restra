import React from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomFlatlist from '../../components/CustomFlatlist';
import CustomModal from '../../components/CustomModal';
import {defaultStyle} from '../../styles/styles';
const Dashboard = ({navigation}) => {
  const userState = useSelector(state => state.user);
  const renderItem = ({item}) => {
    return (
      <CustomFlatlist
        data={item}
        onPress={() =>
          navigation.navigate('Map', {
            screen: 'MapDirection',
            params: {
              latitude: item.latitude,
              longitude: item.longitude,
              title: item.title,
            },
          })
        }
      />
    );
  };
  return (
    <View style={defaultStyle.containerDark}>
      <StatusBar backgroundColor="#000000" />
      <CustomModal
        loadingIndicator={true}
        text="loading"
        animatedType="slide"
        visible={userState.isloading}
      />
      <FlatList
        data={userState?.restaurantData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={true}
        pinchGestureEnabled
        initialNumToRender={5}
        alwaysBounceVertical={true}
      />
    </View>
  );
};

export default Dashboard;
