import React from 'react';
import {View, Text} from 'react-native';
import ConfigsButton from '../../components/ConfigsButton/ConfigsButton';
import AbacuButton from '../../components/AbacuButton/AbacuButton';
import SetConfigsScreenStyles from './SetConfigsScreenStyles.js';
import PageTitle from '../../components/PageTitle/PageTitle';

const SetConfigsScreen = props => {

  return(
    <View style={SetConfigsScreenStyles.screen}>

      <View style={SetConfigsScreenStyles.titleContainer}>
        <PageTitle>Choose your configurations</PageTitle>
      </View>

      <View style={SetConfigsScreenStyles.buttonContainer}>
        <ConfigsButton
          operationType="Addition"
          digitsInfo="(2 digits only)"
          levelsInfo="(3 levels)"
          numQuestions="(20 questions)"
          width="55%"
          onPress={() => props.navigation.navigate('Game')}/>

        <ConfigsButton
          operationType="Subtraction"
          digitsInfo="(2 digits and 3 digits)"
          levelsInfo="(3 levels)"
          numQuestions="(10 questions)"
          width="55%"
          onPress={() => props.navigation.navigate('Game')}/>

        <AbacuButton
          title="Custom"
          titleFontSize="20"
          width="55%"
          onPress={() => props.navigation.navigate('Game')}/>
      </View>

    </View>
  );

}

export default SetConfigsScreen;
