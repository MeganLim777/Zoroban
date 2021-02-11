import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import AbacuButtonStyles from './AbacuButtonStyles.js';
import GlobalColors from '../../styles/Colors';

const AbacuButton = props => {

  return(
    <TouchableHighlight
      style={
        {
          ...AbacuButtonStyles.button,
          width: props.width
        }
      }
      activeOpacity={1}
      underlayColor={GlobalColors.PURPLE}
      onPress={props.onPress}
    >
      <View>
        <Text style={
            {
              ...AbacuButtonStyles.buttonText,
              fontSize: parseInt(props.titleFontSize)
            }
        }>{props.title}</Text>

      </View>
    </TouchableHighlight>

  );

}

export default AbacuButton;
