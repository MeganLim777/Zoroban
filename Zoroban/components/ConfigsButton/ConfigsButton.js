import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import ConfigsButtonStyles from './ConfigsButtonStyles.js';
import GlobalColors from '../../styles/Colors';

const ConfigsButton = props => {

  return(
    <TouchableHighlight
      style={
        {
          ...ConfigsButtonStyles.button,
          width: props.width
        }
      }
      activeOpacity={1}
      underlayColor={GlobalColors.PURPLE}
      onPress={props.onPress}
    >
      <View style={ConfigsButtonStyles.buttonTextContainer}>
        <Text style={ConfigsButtonStyles.buttonText}>{props.operationType}</Text>
        <Text style={ConfigsButtonStyles.buttonSubText}>{props.digitsInfo}</Text>
        <Text style={ConfigsButtonStyles.buttonSubText}>{props.levelsInfo}</Text>
        <Text style={ConfigsButtonStyles.buttonSubText}>{props.numQuestions}</Text>
      </View>
    </TouchableHighlight>

  );

}

export default ConfigsButton;
