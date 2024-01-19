import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Game from './components/board';

const FruitWormGame: React.FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Game />
    </GestureHandlerRootView>
  );
};

export default FruitWormGame;
