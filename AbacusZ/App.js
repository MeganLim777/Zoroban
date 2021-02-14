import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import AbacusZNavigator from './navigation/AbacusZStack';
import GlobalColors from './styles/Colors';
//import {AppLoading} from 'expo'

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <AbacusZNavigator/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: GlobalColors.BLACK,
    padding: '5%'
  }
});

export default App;
