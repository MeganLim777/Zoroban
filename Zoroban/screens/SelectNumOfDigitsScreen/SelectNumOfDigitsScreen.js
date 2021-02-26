import React from 'react';
import {View, Text} from 'react-native';
import ZorobanButton from '../../components/ZorobanButton/ZorobanButton';
import SelectNumOfDigitsScreenStyles from './SelectNumOfDigitsScreenStyles.js';
import PageTitle from '../../components/PageTitle/PageTitle';


const SelectNumOfDigitsScreen = props => {

  return(
    <View style={SelectNumOfDigitsScreenStyles.screen}>

      <View style={SelectNumOfDigitsScreenStyles.titleContainer}>
        <PageTitle>Select number of digits</PageTitle>
      </View>

      <View style={SelectNumOfDigitsScreenStyles.buttonsContainer}>
        <Text style={SelectNumOfDigitsScreenStyles.text}>We want {props.navigation.state.params.numOfLevels} levels</Text>
        <Text style={SelectNumOfDigitsScreenStyles.text}>We want to do {props.navigation.state.params.operation}</Text>

        <ZorobanButton
          title="Next"
          titleFontSize="20"
          width="100%"
          onPress={() => props.navigation.navigate('Main')}/>

      </View>

    </View>
  );

}

export default SelectNumOfDigitsScreen;
