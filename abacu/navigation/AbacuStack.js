import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen/MainScreen';
import SetConfigsScreen from '../screens/SetConfigsScreen/SetConfigsScreen';
import GameScreen from '../screens/GameScreen/GameScreen';
import HoorayScreen from '../screens/HoorayScreen/HoorayScreen';

//Storing the React component that createStackNavigator creates
const AbacuStack = createStackNavigator({
  Main: {
    screen: MainScreen
  },
  SetConfigs: {
    screen: SetConfigsScreen
  },
  Game: {
    screen: GameScreen
  },
  Hooray: {
    screen: HoorayScreen,
    navigationOptions: {
        headerShown: false,
    }
  }
});

export default createAppContainer(AbacuStack);
