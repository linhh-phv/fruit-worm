import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainParamsList} from '../type';
import {HOME_SCREEN, FRUIT_WORM_GAME_SCREEN} from '../../constants/screenKeys';
import HomeScreen from '../../feature/home';
import FruitWormGame from '../../feature/fruitWorm';

const Stack = createNativeStackNavigator<MainParamsList>();

// all screen for authenticated
const AppsScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animation: 'none',
        headerShown: false,
      }}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={FRUIT_WORM_GAME_SCREEN} component={FruitWormGame} />
    </Stack.Navigator>
  );
};

export default AppsScreens;
