import React from 'react';
import {Text} from 'react-native';
import PageTitleStyles from './PageTitleStyles.js';

const SetConfigsScreen = props => {

  return(
    <Text style={PageTitleStyles.title}>{props.children}</Text>
  );

}

export default SetConfigsScreen;
