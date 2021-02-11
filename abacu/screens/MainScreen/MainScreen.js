import React from 'react';
import {View, Text, Button} from 'react-native';
import MainScreenStyles from './MainScreenStyles';

const MainScreen = props => {

  return(
    <View>
      <Text style={MainScreenStyles.text}>This is the Main screen</Text>
      <Text style={MainScreenStyles.text}>This is the Main screen</Text>
      <Button
        title="Go to SetConfigScreen"
        onPress={() => props.navigation.navigate('SetConfigs')}/>
    </View>
  );

}

export default MainScreen;
