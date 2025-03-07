import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import GamePageStyles from './GamePageStyles.js';
import QuestionAndAnswer from './QuestionAndAnswer/QuestionAndAnswer';
import AbacusContainer from './AbacusContainer/AbacusContainer';

const GamePage = props => {

  return(
    <View style={GamePageStyles.screen}>

      <View style={GamePageStyles.qAndAnsContainer}>
        <QuestionAndAnswer {...props}/>
      </View>

      <View style={GamePageStyles.abacusContainer}>
        <AbacusContainer />
      </View>
    </View>
  );

}

export default GamePage;
