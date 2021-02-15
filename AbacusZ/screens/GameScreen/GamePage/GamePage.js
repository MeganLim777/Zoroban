import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
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
  let [inputAns, setInputAns] = useState("0");
  let [correctOrWrong, setCorrectOrWrong] = useState(<Text style={GamePageStyles.text}>Enter your answer:</Text>);

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
    setCorrectOrWrong(<Text style={GamePageStyles.text}>Enter your answer:</Text>);
    setInputAns("");
  }


  //This function ensures that we only accept inputs that
  //contains numbers 0 - 9 and decimal points.
  const onChanged = (input) => {
    setInputAns(input.replace(/[^.0-9]/g, ''));
  }

  //This function is called when the user wants to give up.
  //When giving up, tell the user the real answer (in both the textInput and the message),
  //  and a button should go to next question.
  const giveUp = () => {
    setCorrectOrWrong(
      <View style={GamePageStyles.resultsContainer}>
        <Text style={GamePageStyles.correctAns}>Ans: {answer}</Text>
        <Button title="Next question" onPress={newQuestion}/>
      </View>
    );
    setInputAns(answer.toString());
  }


  //This function checks the answer and will say whether it is correct or wrong.
  const checkAns = () => {

    if (parseInt(inputAns) === answer) {
      setCorrectOrWrong(
        <View style={GamePageStyles.resultsContainer}>
          <Text style={GamePageStyles.correctAns}>Correct</Text>
          <Button title="Next question" onPress={newQuestion}/>
        </View>
      );
    } else {
      setCorrectOrWrong(
        <View style={GamePageStyles.resultsContainer}>
          <Text style={GamePageStyles.wrongAns}>Sorry, try again</Text>
          <Button title="Give up" onPress={giveUp}/>
        </View>
      );
    }

  }

  useEffect(() => {
    console.log("GamePage rendered");
  });

  return(
    <View style={GamePageStyles.screen}>

      <View style={GamePageStyles.questionContainer}>
        <QuestionDisplayer arrayOfNumbers={arrayOfNumbers} operation={operation}/>
        <Text style={GamePageStyles.text}>Answer (multiplication):      {answer}</Text>
      </View>

      <View style={GamePageStyles.answerContainer}>
        {correctOrWrong}

        <TextInput
          style={GamePageStyles.textInput}
          value={inputAns}
          keyboardType='number-pad'
          onChangeText={(text)=> onChanged(text)}
          onSubmitEditing={checkAns}/>
      </View>

      <View style={GamePageStyles.abacusContainer}>
        <Text>This is where abacus goes</Text>
      </View>
    </View>
  );

}

export default GamePage;
