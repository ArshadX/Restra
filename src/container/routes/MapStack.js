import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Map from '../screens/Map';
import MapDirection from '../screens/MapDirection';

const Stack = createNativeStackNavigator();
const MapStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MapTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MapTab" component={Map} />
      <Stack.Screen name="MapDirection" component={MapDirection} />
    </Stack.Navigator>
  );
};

export default MapStack;
