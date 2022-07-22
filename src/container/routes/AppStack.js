import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Dashboard from '../screens/Dashboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Appbar from '../../components/Appbar';
import MapStack from './MapStack';
import {logOut} from '../../redux/user/userActions';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AlertProfileUpdate2,
  AlertProfileUpdate4,
} from '../../components/AlertBox';
const Tab = createBottomTabNavigator();
const AppStack = () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'Map') {
            iconName = 'google-maps';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveBackgroundColor: '#000000',
        tabBarStyle: {borderTopColor: 'red', borderTopWidth: 2},
        header: () => (
          <Appbar
            title={route.name}
            backgroundColor="#000000"
            Contentcolor="#ffffff"
            rightIcon="logout"
            rightIconColor="#4285F4"
            onPressRightIcon={() => {
              AlertProfileUpdate4(
                'Logout!',
                'do you want to logout?',
                async () => {
                  try {
                    await AsyncStorage.clear();
                    dispatch(logOut());
                  } catch (e) {
                    AlertProfileUpdate4(e);
                  }
                },
              );
            }}
          />
        ),
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen
        name="Map"
        component={MapStack}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
