import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

const HoorayScreen = props => {

  return(
    <SafeAreaView>
      <Text>This is the Hooray screen</Text>
      <Button
        title="Go to Main screen"
        onPress={() => props.navigation.navigate('Main')}/>
    </SafeAreaView>
  );

}

export default HoorayScreen;
