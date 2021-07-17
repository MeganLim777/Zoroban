import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import ZorobanButton from '../../components/ZorobanButton/ZorobanButton';
import SelectNumOfQuestionsScreenStyles from './SelectNumOfQuestionsScreenStyles.js';
import PageTitle from '../../components/PageTitle/PageTitle';


const SelectNumOfQuestionsScreen = props => {

  const operation = props.navigation.state.params.operation;
  const digitsNLevels = props.navigation.state.params.digitsArray;

  return(
    <View style={SelectNumOfQuestionsScreenStyles.screen}>

      <View style={SelectNumOfQuestionsScreenStyles.titleContainer}>
        <PageTitle>Select number of questions</PageTitle>
      </View>

      <View style={SelectNumOfQuestionsScreenStyles.bodyContainer}>

        <ZorobanButton
          title="5"
          titleFontSize="25"
          width="20%"
          onPress={() => props.navigation.navigate('Game',
            {
              operation: operation,
              digitsNLevels: digitsNLevels,
              numOfQuestions: 5
            }
        )}/>

        <ZorobanButton
          title="10"
          titleFontSize="25"
          width="20%"
          onPress={() => props.navigation.navigate('Game',
            {
              operation: operation,
              digitsNLevels: digitsNLevels,
              numOfQuestions: 10
            }
        )}/>

        <ZorobanButton
          title="15"
          titleFontSize="25"
          width="20%"
          onPress={() => props.navigation.navigate('Game',
            {
              operation: operation,
              digitsNLevels: digitsNLevels,
              numOfQuestions: 15
            }
        )}/>

        <ZorobanButton
          title="20"
          titleFontSize="20"
          width="20%"
          onPress={() => props.navigation.navigate('Game',
            {
              operation: operation,
              digitsNLevels: digitsNLevels,
              numOfQuestions: 20
            }
        )}/>

      </View>

    </View>
  );

}

export default SelectNumOfQuestionsScreen;
