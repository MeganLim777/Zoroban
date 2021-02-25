import React from 'react';
import {View} from 'react-native';
import ZorobanButton from '../../components/ZorobanButton/ZorobanButton';
import SelectOperationScreenStyles from './SelectOperationScreenStyles.js';
import PageTitle from '../../components/PageTitle/PageTitle';
import Constants from '../../constants/Constants';


const SelectOperationScreen = props => {

  return(
    <View style={SelectOperationScreenStyles.screen}>

      <View style={SelectOperationScreenStyles.titleContainer}>
        <PageTitle>Select an operation</PageTitle>
      </View>

      <View style={SelectOperationScreenStyles.buttonsContainer}>
        <View style={SelectOperationScreenStyles.row1}>
          <ZorobanButton
            title={Constants.OPERATION.ADDITION}
            titleFontSize="50"
            width="30%"
            onPress={() => props.navigation.navigate('SelectNumOfLevels', {
              operation: Constants.OPERATION.ADDITION
            })}/>

          <ZorobanButton
            title={Constants.OPERATION.SUBTRACTION}
            titleFontSize="50"
            width="30%"
            onPress={() => props.navigation.navigate('SelectNumOfLevels', {
              operation: Constants.OPERATION.SUBTRACTION
            })}/>
        </View>

        <View style={SelectOperationScreenStyles.row2}>
          <ZorobanButton
            title={Constants.OPERATION.MULTIPLICATION}
            titleFontSize="50"
            width="30%"
            onPress={() => props.navigation.navigate('SelectNumOfLevels', {
              operation: Constants.OPERATION.MULTIPLICATION
            })}/>

          <ZorobanButton
            title={Constants.OPERATION.DIVISION}
            titleFontSize="50"
            width="30%"
            onPress={() => props.navigation.navigate('SelectNumOfLevels', {
              operation: Constants.OPERATION.DIVISION
            })}/>
        </View>

      </View>

    </View>
  );

}

export default SelectOperationScreen;
