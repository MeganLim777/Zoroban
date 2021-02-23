import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import ZorobanNavigator from './navigation/ZorobanStack';
import GlobalColors from './styles/Colors';


const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ZorobanNavigator/>
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
