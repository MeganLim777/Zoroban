import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
// import AbacusZButton from '../../../components/AbacusZButton/AbacusZButton';
import GamePageStyles from './GamePageStyles.js';
import QuestionAndAnswer from './QuestionAndAnswer/QuestionAndAnswer';

const GamePage = props => {

  return(
    <View style={GamePageStyles.screen}>

      <View style={GamePageStyles.qAndAnsContainer}>
        <QuestionAndAnswer />
      </View>

      <View style={GamePageStyles.abacusContainer}>
        <Text>This is where abacus goes</Text>
      </View>
    </View>
  );

}

export default GamePage;
