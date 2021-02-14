import React from 'react';
import {View, Text, Button} from 'react-native';
import MainScreenStyles from './MainScreenStyles.js';
import PageTitle from '../../components/PageTitle/PageTitle';
import AbacusZButton from '../../components/AbacusZButton/AbacusZButton';

const MainScreen = props => {

  return(
    <View style={MainScreenStyles.screen}>
      <View style={MainScreenStyles.titleContainer}>
        <PageTitle>AbacusZ</PageTitle>
      </View>
      <View style={MainScreenStyles.buttonContainer}>
        <AbacusZButton
          title="Play"
          titleFontSize="25"
          width="35%"
          onPress={() => props.navigation.navigate('SetConfigs')}/>
      </View>
    </View>
  );

}

export default MainScreen;
