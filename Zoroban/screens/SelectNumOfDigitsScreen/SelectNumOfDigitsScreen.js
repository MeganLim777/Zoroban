import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import ZorobanButton from '../../components/ZorobanButton/ZorobanButton';
import SelectNumOfDigitsScreenStyles from './SelectNumOfDigitsScreenStyles.js';
import DigitEditor from './DigitEditor/DigitEditor.js';
import PageTitle from '../../components/PageTitle/PageTitle';


const SelectNumOfDigitsScreen = props => {

  const numOfLevels = props.navigation.state.params.numOfLevels;
  const operation = props.navigation.state.params.operation;
  const lastIndex = numOfLevels - 1;

  //Initialising the array of digits
  var arrayOfDigitsIni = [3, 3, 3]; //By default, it is 3 levels with 3 digits.
  if (numOfLevels === 2) {
    arrayOfDigitsIni = [3, 3];
  } else if (numOfLevels === 4) {
    arrayOfDigitsIni = [3, 3, 3, 3];
  } else if (numOfLevels === 5) {
    arrayOfDigitsIni = [3, 3, 3, 3, 3];
  }

  const [arrayOfDigits, setArrayOfDigits] = useState(arrayOfDigitsIni);

  useEffect(() => {
    console.log("SelectNumOfDigitsScreen got update somewhere");
  });

  //This should be called every time any increase digit button is pressed AND
  //  the number of digits is actually able to increase.
  //In other words, if the number of digits CANNOT increase, then this function
  //  will NOT be called.
  //When this function is called though, it will change the amount of digits in
  //the 'arrayOfDigits' array.
  const increaseDigit = (indexInArray) => {

    //Getting the current digit
    const current = arrayOfDigits[indexInArray];

    //Making a shallow copy and then changing the shallow copy
    var arrayOfDigitsCopy = arrayOfDigits;
    arrayOfDigitsCopy[indexInArray] = current + 1;

    //Updating the real array with the changed shallow copy
    setArrayOfDigits(arrayOfDigitsCopy);

  }

  //This should be called every time any decrease digit button is pressed AND
  //  the number of digits is actually able to decrease.
  //In other words, if the number of digits CANNOT decrease, then this function
  //  will NOT be called.
  //When this function is called though, it will change the amount of digits in
  //the 'arrayOfDigits' array.
  const decreaseDigit = (indexInArray) => {

    //Getting the current digit
    const current = arrayOfDigits[indexInArray];

    //Making a shallow copy and then changing the shallow copy
    var arrayOfDigitsCopy = arrayOfDigits;
    arrayOfDigitsCopy[indexInArray] = current - 1;

    //Updating the real array with the changed shallow copy
    setArrayOfDigits(arrayOfDigitsCopy);
  }

  //Initialising an array containing all the JSX code needed to display the preview question.
  const allDigits = arrayOfDigits.map((numOfDigits, index) => {
      if (index !== lastIndex) {
        return (
          <DigitEditor key={index} numOfDigits={numOfDigits} increaseFunc={() => increaseDigit(index)} decreaseFunc={() => decreaseDigit(index)}/>
        );
      } else {
        return (
          <DigitEditor key={index} additionalText={operation} numOfDigits={numOfDigits} increaseFunc={() => increaseDigit(index)} decreaseFunc={() => decreaseDigit(index)}/>
        );
      }
  });


  return(
    <View style={SelectNumOfDigitsScreenStyles.screen}>

      <View style={SelectNumOfDigitsScreenStyles.titleContainer}>
        <PageTitle>Select number of digits</PageTitle>
      </View>

      <View style={SelectNumOfDigitsScreenStyles.bodyContainer}>

        <View style={SelectNumOfDigitsScreenStyles.questionContainer}>
          {allDigits}
        </View>

        <View style={SelectNumOfDigitsScreenStyles.nextBtn}>
          <ZorobanButton
            title="Next"
            titleFontSize="20"
            width="100%"
            onPress={() => props.navigation.navigate('SelectNumOfQuestions',{
              operation: operation,
              numOfLevels: numOfLevels,
              digitsArray: arrayOfDigits
            })} />
        </View>

      </View>

    </View>
  );

}

export default SelectNumOfDigitsScreen;
