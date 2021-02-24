import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen/MainScreen';
import SetConfigsScreen from '../screens/SetConfigsScreen/SetConfigsScreen';
import GameScreen from '../screens/GameScreen/GameScreen';
import GlobalColors from '../styles/Colors';

let customHeader = (
        {
          headerStyle: {
            backgroundColor: GlobalColors.BLACK,
            elevation: 0, // remove the header's shadow on Android
            shadowOpacity: 0 // remove the header's shadow on iOS
          },
          headerTintColor: GlobalColors.PLATINUM_WHITE,
          title: ""
        }
);


//Storing the React component that createStackNavigator creates
const ZorobanStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
        headerShown: false
    }
  },
  SetConfigs: {
    screen: SetConfigsScreen,
    navigationOptions: {
      headerLeft: (props) => (
        <HeaderBackButton
          {...props}
          pressColorAndroid={GlobalColors.PLATINUM_WHITE}
        />
      ),
      ...customHeader
    }
  },
  Game: {
    screen: GameScreen,
    navigationOptions: {
        headerShown: false
    }
  }

}, {
      defaultNavigationOptions: () => ({
          cardStyle: {
              backgroundColor: GlobalColors.BLACK
          },
      })
  }
);

export default createAppContainer(ZorobanStack);
