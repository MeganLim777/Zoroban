import React from 'react';
import {View, Text, Button} from 'react-native';

const SetConfigsScreen = props => {

  return(
    <View>
      <Text>This is the SetConfigs screen</Text>
      <Button
        title="Go to Game screen"
        onPress={() => props.navigation.navigate('Game')}/>
    </View>
  );

}

export default SetConfigsScreen;
