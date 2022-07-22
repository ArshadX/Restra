import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Tab = createBottomTabNavigator();
const BottomTab = ({name, components}) => {
  const listofScreen = components.map(ele => (
    <Tab.Screen
      component={ele}
      name={`${ele.toString().slice(9)}`}
      key={`${ele}`}
    />
  ));
  return (
    <Tab.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{headerShown: true}}>
      {listofScreen}
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 100,
  },
});
export default BottomTab;
