import React from 'react';
import {View, Text, Button} from 'react-native';
import MainScreenStyles from './MainScreenStyles.js';
import AbacuButton from '../../components/AbacuButton/AbacuButton';

const MainScreen = props => {

  return(
    <View>
      <Text style={MainScreenStyles.text}>This is the Main screen</Text>
      <Text style={MainScreenStyles.text}>This is the Main screen</Text>
      <View style={MainScreenStyles.buttonContainer}>
        <AbacuButton
          title="Play"
          titleFontSize="25"
          width="35%"
          onPress={() => props.navigation.navigate('SetConfigs')}/>
      </View>
    </View>
  );

}

export default MainScreen;
