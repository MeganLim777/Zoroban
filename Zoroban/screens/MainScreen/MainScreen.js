import React from 'react';
import {View, Text, Button} from 'react-native';
import MainScreenStyles from './MainScreenStyles.js';
import PageTitle from '../../components/PageTitle/PageTitle';
import ZorobanButton from '../../components/ZorobanButton/ZorobanButton';

const MainScreen = props => {

  return(
    <View style={MainScreenStyles.screen}>
      <View style={MainScreenStyles.titleContainer}>
        <PageTitle>Zoroban</PageTitle>
      </View>
      <View style={MainScreenStyles.buttonContainer}>
        <ZorobanButton
          title="Play"
          titleFontSize="25"
          width="35%"
          onPress={() => props.navigation.navigate('SetConfigs')}/>
      </View>
    </View>
  );

}

export default MainScreen;
