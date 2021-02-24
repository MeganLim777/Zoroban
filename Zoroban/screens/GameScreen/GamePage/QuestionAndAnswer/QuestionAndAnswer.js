import React, {Component} from 'react';
import {View, Text, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import QuestionAndAnswerStyles from './QuestionAndAnswerStyles.js';
import QuestionDisplayer from './QuestionDisplayer/QuestionDisplayer';
import InputAndResults from './InputAndResults/InputAndResults';
import Constants from '../../../../constants/Constants';


//This function returns an array of random numbers based on the
//given array's length and stored values.
//The given array's length is the amount of levels we want.
//Each value stored in the array represents how many digits we want in that number.
//    e.g. the given array: [2, 3, 3]
//         Means that the first number should have 2 digits.
//         and the second and third numbers should have 3 digits.
function generateRandomNumbers(digitsNLvlsArray) {

  console.log("generateRandomNumbers is called >>>>>>>>");

  const numOfLevels = digitsNLvlsArray.length;

  let resultArr = Array.apply(Array(numOfLevels));

  //Go through each level and generate a random number for
  //each level based on the number of digits.
  for (var i = 0; i < numOfLevels; i++) {

    var numOfDigits = digitsNLvlsArray[i];

    //Calculating min value
    var min = 1
    if (numOfDigits > 1) {
      min = Math.pow(10, (numOfDigits - 1));
    }

    //Calculating max value
    var max = Math.pow(10, numOfDigits) - 1;

    //Generate a random number between min and max (inclusive).
    var random =  Math.floor(Math.random() * ((max + 1) - min) + min);

    resultArr.push(random);
  }

  return resultArr;
}

//This function returns the answer based on the given opertion applied on the
//given bunch of numbers.
//   /:{'\u00F7'} +:{'\u002B'} -:{'\u2212'} x:{'\u00D7'}
function calculateAns(operation, arrayOfNumbers) {

  const amountOfNumbers = arrayOfNumbers.length;
  console.log(arrayOfNumbers);

  if (operation === Constants.OPERATION.ADDITION) {
    console.log("hey it is ADDITION");
    let result = 0;

    //Add all the numbers of the array up
    for (var i = 0; i < amountOfNumbers; i++) {
      result = result + arrayOfNumbers[i];
    }

    return result;

  } else if (operation === Constants.OPERATION.SUBTRACTION) {
    console.log("hey it is SUBTRACTION");
    let result = arrayOfNumbers[0]; //First element

    //Starting from the first number,
    //subsequently minus off the numbers after that.
    for (var i = 1; i < amountOfNumbers; i++) {
      result = result - arrayOfNumbers[i];
    }

    return result;

  } else if (operation === Constants.OPERATION.MULTIPLICATION) {
    console.log("hey it is MULTIPLICATION");
    let result = 1;

    //Multiply all the numbers of the array together.
    for (var i = 0; i < amountOfNumbers; i++) {
      result = result * arrayOfNumbers[i];
    }

    return result;

  } else {
    console.log("hey it is DIVISION, don't have answer yet");
    return (0);
  }

}


class QuestionAndAnswer extends Component {

  constructor(props) {
    super(props);

    //Getting the params
    const {operation, digitsNLevels, numOfQuestions} = props;
    console.log("operation: ", operation);


    //Getting the chosen operation into a string form.
    let chosenOperation = JSON.stringify(operation);
    chosenOperation = JSON.parse(chosenOperation);

    //Generating an array of random numbers based on the
    //given amount of digits and levels.
    let arrayOfNumbers = generateRandomNumbers(digitsNLevels);

    console.log("!!!!!!!!");

    this.state = {
      chosenOperation: chosenOperation,
      digitsNLevels: digitsNLevels,
      numOfQuestions: numOfQuestions,
      arrayOfNumbers: arrayOfNumbers,
      answer: calculateAns(chosenOperation, arrayOfNumbers)
    };

  }

  //This function will generate a new question
  // - so that means generate all the random numbers and calculate the answer.
  newQuestion = () => {

    console.log("newQUestion is called");
    let newArrayOfNums = generateRandomNumbers(this.state.digitsNLevels);
    let newAnswer = calculateAns(this.state.chosenOperation, newArrayOfNums);

    this.setState({
      arrayOfNumbers: newArrayOfNums,
      answer: newAnswer
    });


  }

  render() {
    return(
      <View style={QuestionAndAnswerStyles.container}>

        <View style={QuestionAndAnswerStyles.questionContainer}>
          <QuestionDisplayer arrayOfNumbers={this.state.arrayOfNumbers} operation={this.state.chosenOperation}/>
          <Text style={QuestionAndAnswerStyles.text}>Answer:      {this.state.answer}</Text>
        </View>

        <View style={QuestionAndAnswerStyles.ansAndResultContainer}>
          <InputAndResults answer={this.state.answer} newQuestion={this.newQuestion} />
        </View>

      </View>
    );
  }

}

export default QuestionAndAnswer;
