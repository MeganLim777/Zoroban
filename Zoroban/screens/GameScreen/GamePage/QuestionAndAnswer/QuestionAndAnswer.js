import React, {Component} from 'react';
import {View, Text, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import QuestionAndAnswerStyles from './QuestionAndAnswerStyles.js';
import QuestionDisplayer from './QuestionDisplayer/QuestionDisplayer';
import InputAndResults from './InputAndResults/InputAndResults';
import Constants from '../../../../constants/Constants';

//This function rounds the number/decimal nicely as expected.
// precision = the decimal place that you want to round to.
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

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

  } else if (operation === Constants.OPERATION.DIVISION) {
    console.log("hey it is DIVISION");
    let result = arrayOfNumbers[0]; //First element

    //Starting from the first number,
    //subsequently divide the numbers after that.
    for (var i = 1; i < amountOfNumbers; i++) {
      result = round(result / arrayOfNumbers[i], 4); //Round to 4dp each time.
    }

    //Convert to string so that we can compare string to string when checking answer.
    //If both strings are the same, then the answer will be correct.
    return result.toString();

  } else {
    //The given operation is bad... so we'll let the user do addition.

    let result = 0;

    //Add all the numbers of the array up
    for (var i = 0; i < amountOfNumbers; i++) {
      result = result + arrayOfNumbers[i];
    }

    return result;
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

    //Minimum amount of questions that can be done is 1.
    this.state = {
      chosenOperation: chosenOperation,
      digitsNLevels: digitsNLevels,
      numOfQuestions: numOfQuestions,
      arrayOfNumbers: arrayOfNumbers,
      answer: calculateAns(chosenOperation, arrayOfNumbers),
      numOfQuestionsDone: 1
    };

  }

  //This function will generate a new question
  // - so that means generate all the random numbers and calculate the answer.
  newQuestion = () => {

    let questionNum = this.state.numOfQuestionsDone;
    let totalNumOfQuestions = this.state.numOfQuestions;

    //If we have NOT completed all the questions yet, give a new question.
    if (questionNum < totalNumOfQuestions) {
      console.log("newQUestion is called");
      let newArrayOfNums = generateRandomNumbers(this.state.digitsNLevels);
      let newAnswer = calculateAns(this.state.chosenOperation, newArrayOfNums);

      this.setState({
        arrayOfNumbers: newArrayOfNums,
        answer: newAnswer,
        numOfQuestionsDone: questionNum + 1
      });
    } else { //We have completed all the questions, then it is game over.
      console.log("Game over");
      this.props.gameOverMethod();
    }


  }


  componentDidMount() {
    console.log("QuestionAndAnswer rendered!!!!!!!!!!!!!!!!!!");
  }

  render() {

    let questionNum = this.state.numOfQuestionsDone;
    let totalNumOfQuestions = this.state.numOfQuestions;

    console.log("Question ", questionNum, "------------------");
    console.log("out of ", totalNumOfQuestions, "------------------");

    return(
      <View style={QuestionAndAnswerStyles.container}>

        <View style={QuestionAndAnswerStyles.questionNumContainer}>
          <Text style={QuestionAndAnswerStyles.questionNumText}>Question {this.state.numOfQuestionsDone} of {this.state.numOfQuestions}</Text>
        </View>

        <View style={QuestionAndAnswerStyles.questionContainer}>
          <QuestionDisplayer arrayOfNumbers={this.state.arrayOfNumbers} operation={this.state.chosenOperation}/>
        </View>

        <View style={QuestionAndAnswerStyles.ansAndResultContainer}>
          <InputAndResults answer={this.state.answer} newQuestion={this.newQuestion} />
        </View>

      </View>
    );
  }

}

export default QuestionAndAnswer;
