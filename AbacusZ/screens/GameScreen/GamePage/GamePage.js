import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
// import AbacusZButton from '../../../components/AbacusZButton/AbacusZButton';
import GamePageStyles from './GamePageStyles.js';
import QuestionDisplayer from './QuestionDisplayer/QuestionDisplayer';

const generateRandomNumber = () => {
  const min = 1;
  const max = 20;
  const random =  Math.floor(Math.random() * ((max + 1) - min) + min);

  return random;
}

const GamePage = props => {

  let [number1, setNumber1] = useState(generateRandomNumber());
  let [number2, setNumber2] = useState(generateRandomNumber());
  let [arrayOfNumbers, setArrayOfNumbers] = useState([number1, number2]);
  let [answer, setAnswer] = useState(number1 * number2);
  let operation = '\u00D7'; //Multiplication    {'\u00F7'} {'\u002B'} {'\u2212'} {'\u00D7'}


  //This function will generate a new question
  // - so that means generate all the random numbers and calculate the answer.
  const newQuestion = () => {
    let newNumber1 = generateRandomNumber();
    let newNumber2 = generateRandomNumber();
    let newAnswer = newNumber1 * newNumber2;

    setNumber1(newNumber1);
    setNumber2(newNumber2);
    setArrayOfNumbers([newNumber1, newNumber2]);
    setAnswer(newAnswer);
  }

  return(
    <View style={GamePageStyles.screen}>

      <View style={GamePageStyles.questionContainer}>
        <QuestionDisplayer arrayOfNumbers={arrayOfNumbers} operation={operation}/>
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

export default GamePage;
