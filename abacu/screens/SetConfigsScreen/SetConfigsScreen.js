import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';


const SetConfigsScreen = props => {

  return(
    <SafeAreaView>
      <Text>This is the SetConfigs screen</Text>
      <Button
        title="Go to Game screen"
        onPress={() => props.navigation.navigate('Game')}/>
    </SafeAreaView>
  );

}

export default SetConfigsScreen;
