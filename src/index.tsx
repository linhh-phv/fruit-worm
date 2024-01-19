import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigation from './navigations';

const Stack = createNativeStackNavigator();

// main stack, including all screen
function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
