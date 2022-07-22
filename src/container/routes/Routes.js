import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
const Routes = () => {
  const userState = useSelector(state => state.user);
  return (
    <NavigationContainer>
      {userState.isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
