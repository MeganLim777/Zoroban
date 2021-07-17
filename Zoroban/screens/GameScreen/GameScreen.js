import React, {Component} from 'react';
import {View, Text, Button, Alert, BackHandler} from 'react-native';
import { withNavigation } from 'react-navigation';
import GamePage from './GamePage/GamePage';
import HoorayPage from './HoorayPage/HoorayPage';
import GameScreenStyles from './GameScreenStyles';
import GlobalColors from '../../styles/Colors';

//Function that IF the game is NOT over, then it will display
//an Alert when the user presses the top-left Back button or display the
//same Alert when Android hardware Back button is pressed; AND this function
//also returns true.
//The Alert will ask whether the user wants to forfeit the game or not.
//If the game IS over, then there's no Alert and false is returned.
const forfeitConfirmation = (navigation, gameOver) => {

  //If the game is NOT over, then:
  // . Display an alert
  // . Return true for the goBack function to return true for
  //   adding the event listener to BackHandler.
  if (!gameOver) {

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

    return true;

  } else {
    //If the game IS over, then:
    // . Return false for the goBack function to return false for
    //   removing the event listener from BackHandler.
    return false;
  }

}


class GameScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameOver: false
    }
  }

  //Function to call the forfeitConfirmation function.
  goBack = () => {
    return forfeitConfirmation(this.props.navigation, this.state.gameOver);
  }

  //Function to call when game is over
  gameOverMethod = () => {
    this.setState({
      gameOver: true
    });
  }

  //Function to call to reset the game with the same configurations
  resetSameGame = () => {

    this.setState({
      gameOver: false
    });
  }

  //Adding the event listener for Android's hardware Back button.
  componentDidUpdate() {
    BackHandler.addEventListener('hardwareBackPress', this.goBack);
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

    //By default let the Game page be displayed
    let pageToDisplay = (
      <GamePage {...this.props.navigation.state.params} gameOverMethod={this.gameOverMethod}/>

    );

    //If the game IS over
    if (this.state.gameOver) {

      //Remove the event listener of the Android's hardware Back button.
      BackHandler.removeEventListener('hardwareBackPress', this.goBack);

      //Change the pageToDisplay variable so that it displays the Hooray page
      //instead.
      pageToDisplay = (
        <HoorayPage resetSameGameMethod={this.resetSameGame}/>
      );
    }

    return(
      <View style={GameScreenStyles.screen}>
        {pageToDisplay}
      </View>
    );
  }


}

export default withNavigation(GameScreen);
