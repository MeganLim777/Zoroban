import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, KeyboardAvoidingView} from 'react-native';
// import AbacusZButton from '../../../components/AbacusZButton/AbacusZButton';
import QuestionAndAnswerStyles from './QuestionAndAnswerStyles.js';
import QuestionDisplayer from './QuestionDisplayer/QuestionDisplayer';
import InputAndResults from './InputAndResults/InputAndResults';


//This function returns a random number between 1 and 20 (inclusive).
const generateRandomNumber = () => {
  const min = 1;
  const max = 20;
  const random =  Math.floor(Math.random() * ((max + 1) - min) + min);

  return random;
}

const QuestionAndAnswer = props => {

  let [number1, setNumber1] = useState(generateRandomNumber());
  let [number2, setNumber2] = useState(generateRandomNumber());
  let [arrayOfNumbers, setArrayOfNumbers] = useState([number1, number2]);
  let [answer, setAnswer] = useState(number1 * number2);
  let operation = '\u00D7'; //Multiplication    {'\u00F7'} {'\u002B'} {'\u2212'} {'\u00D7'}


  //This function will generate a new question
  // - so that means generate all the random numbers and calculate the answer.
  // - And also clear the 'correctOrWrong' message.
  // - And also clear the inputAns.
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
    <View style={QuestionAndAnswerStyles.container}>

      <View style={QuestionAndAnswerStyles.questionContainer}>
        <QuestionDisplayer arrayOfNumbers={arrayOfNumbers} operation={operation}/>
        <Text style={QuestionAndAnswerStyles.text}>Answer (multiplication):      {answer}</Text>
      </View>

      <View style={QuestionAndAnswerStyles.ansAndResultContainer}>
        <InputAndResults answer={answer} newQuestion={newQuestion} />
      </View>

    </View>
  );

}

export default QuestionAndAnswer;
