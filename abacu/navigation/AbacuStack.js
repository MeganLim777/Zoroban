import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen/MainScreen';
import SetConfigsScreen from '../screens/SetConfigsScreen/SetConfigsScreen';
import GameScreen from '../screens/GameScreen/GameScreen';
import GlobalColors from '../styles/Colors';

//Storing the React component that createStackNavigator creates
const AbacuStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
        header: null,
    }
  },
  SetConfigs: {
    screen: SetConfigsScreen
  },
  Game: {
    screen: GameScreen,
  }

}, {
      defaultNavigationOptions: () => ({
          cardStyle: {
              backgroundColor: 'transparent',
          },
      })
  }
);

export default createAppContainer(AbacuStack);
