import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';


const GameScreen = props => {

  return(
    <SafeAreaView>
      <Text>This is the Game screen</Text>
      <Button
        title="Go to Hooray screen"
        onPress={() => props.navigation.navigate('Hooray')}/>
    </SafeAreaView>
  );

}

export default GameScreen;
