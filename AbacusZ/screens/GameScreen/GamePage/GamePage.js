import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
// import { withNavigation } from 'react-navigation';
// import AbacusZButton from '../../../components/AbacusZButton/AbacusZButton';
import GamePageStyles from './GamePageStyles.js';
// import PageTitle from '../../../components/PageTitle/PageTitle';

const generateRandomNumber = () => {
  const min = 1;
  const max = 10;
  const random =  Math.floor(Math.random() * ((max + 1) - min) + min);

  return random;
}

const GamePage = props => {

  let [number1, setNumber1] = useState(generateRandomNumber());
  let [number2, setNumber2] = useState(generateRandomNumber());
  let [answer, setAnswer] = useState(number1 * number2);

  const newQuestion = () => {
    let newNumber1 = generateRandomNumber();
    let newNumber2 = generateRandomNumber();
    let newAnswer = newNumber1 * newNumber2;

    setNumber1(newNumber1);
    setNumber2(newNumber2);
    setAnswer(newAnswer);
  }

  return(
    <View style={GamePageStyles.screen}>
      <View style={GamePageStyles.questionContainer}>
        <Text style={GamePageStyles.text}>This is where question goes</Text>
        <Text style={GamePageStyles.text}>Random number 1:      {number1}</Text>
        <Text style={GamePageStyles.text}>Random number 2:      {number2}</Text>
        <Text style={GamePageStyles.text}>Answer (multiplication):      {answer}</Text>
        <Button title="generate random numbers" onPress={newQuestion}/>
      </View>

      <View style={GamePageStyles.answerContainer}>
        <Text>This is where answer box goes</Text>
      </View>

      <View style={GamePageStyles.abacusContainer}>
        <Text>This is where abacus goes</Text>
      </View>
    </View>
  );

}

// withNavigation returns a component that wraps HoorayPage and passes in the
// navigation prop
export default GamePage;
