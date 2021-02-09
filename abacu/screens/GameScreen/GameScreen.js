import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, Alert, BackHandler} from 'react-native';
import {HeaderBackButton} from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

// //Function that will display an Alert when the user presses the
// //top-left Back button.
// //The Alert will ask whether the user wants to forfeit the game or not.
const forfeitConfirmation = (navigation, gameOver) => {

  Alert.alert(
    'Are you sure you want to go back?',
    'You will forfeit the game.',
    [
      {
        text: 'No',
        onPress: () => {},
        style: 'cancel'
      },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          navigation.goBack();
        }
      }
    ]
  );

  return;
}


class GameScreen extends Component {

  constructor(props) {
    super(props);
  }

  //Call the forfeitConfirmation function when the
  //top-left Back button is pressed.
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => {
            forfeitConfirmation(navigation);
          }}
        />
      )
    };
  };


  //Function to call the forfeitConfirmation function.
  goBack = () => {
    forfeitConfirmation(this.props.navigation);
    return true;
  }

  //Adding the event listener for Android's hardware Back button.
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.goBack);
  }

  //Removing the event listener for Android's hardware Back button.
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.goBack);
  }

  render() {
    return(
      <SafeAreaView>
        <Text>This is the Game screen</Text>
        <Button
          title="Go to Main screen"
          onPress={() => this.props.navigation.navigate('Main')}/>
      </SafeAreaView>
    );
  }


}

export default withNavigation(GameScreen);
