import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from 'react-navigation-stack';
import AbacuNavigator from './navigation/AbacuStack';
//import {AppLoading} from 'expo'

const App: () => React$Node = () => {
  return (
    // <SafeAreaView>
    //   <Text>hii</Text>
    //   <AbacuNavigator />
    //   <Text>hii</Text>
    // </SafeAreaView>
    <AbacuNavigator />
  );
};

export default App;
