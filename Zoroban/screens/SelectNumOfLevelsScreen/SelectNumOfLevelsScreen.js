import React from 'react';
import {View, Text, Button} from 'react-native';
import ZorobanButton from '../../components/ZorobanButton/ZorobanButton';
import SelectNumOfLevelsScreenStyles from './SelectNumOfLevelsScreenStyles.js';
import PageTitle from '../../components/PageTitle/PageTitle';


const SelectNumOfLevelsScreen = props => {

  return(
    <View style={SelectNumOfLevelsScreenStyles.screen}>

      <View style={SelectNumOfLevelsScreenStyles.titleContainer}>
        <PageTitle>Select number of levels</PageTitle>
      </View>

      <View style={SelectNumOfLevelsScreenStyles.bodyContainer}>
      <ZorobanButton
        title={props.navigation.state.params.operation}
        titleFontSize="50"
        width="30%"
        onPress={() => props.navigation.navigate('Main')}/>

      </View>

    </View>
  );

}

export default SelectNumOfLevelsScreen;
