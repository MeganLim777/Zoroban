import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import AbacusZButtonStyles from './AbacusZButtonStyles.js';
import GlobalColors from '../../styles/Colors';

const AbacusZButton = props => {

  return(
    <TouchableHighlight
      style={
        {
          ...AbacusZButtonStyles.button,
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
              ...AbacusZButtonStyles.buttonText,
              fontSize: parseInt(props.titleFontSize)
            }
        }>{props.title}</Text>

      </View>
    </TouchableHighlight>

  );

}

export default AbacusZButton;
