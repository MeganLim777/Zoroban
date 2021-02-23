import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import ZorobanButtonStyles from './ZorobanButtonStyles.js';
import GlobalColors from '../../styles/Colors';

const ZorobanButton = props => {

  return(
    <TouchableHighlight
      style={
        {
          ...ZorobanButtonStyles.button,
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
              ...ZorobanButtonStyles.buttonText,
              fontSize: parseInt(props.titleFontSize)
            }
        }>{props.title}</Text>

      </View>
    </TouchableHighlight>

  );

}

export default ZorobanButton;
