import React from 'react';
import {View, Text} from 'react-native';
import PageTitleStyles from './PageTitleStyles.js';

const SetConfigsScreen = props => {

  return(
    <View style={PageTitleStyles.titleContainer}>
      <Text style={PageTitleStyles.title}>{props.children}</Text>
    </View>
  );

}

export default SetConfigsScreen;
