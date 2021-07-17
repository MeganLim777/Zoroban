import React, {useState, useEffect} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import ZorobanButton from '../../../components/ZorobanButton/ZorobanButton';
import GlobalColors from '../../../styles/Colors';
import DigitEditorStyles from './DigitEditorStyles.js';

//This component should render every time the digit actually changes
const DigitEditor = props => {

  //******** CONSTANTS, STATE and 1 HELPER METHOD ********//
  const TWO_DIGITS = {
    text: "    XX",
    numOfDigits: 2
  }

  const THREE_DIGITS = {
    text: "   XXX",
    numOfDigits: 3
  }

  const FOUR_DIGITS = {
    text: "  XXXX",
    numOfDigits: 4
  }

  const FIVE_DIGITS = {
    text: " XXXXX",
    numOfDigits: 5
  }

  const MAX_DIGITS = 5;
  const MIN_DIGITS = 2;

  //This method returns the digit constant that corresponds to the given desired amount of digits.
  const calculateDigit = (numOfDigits) => {

    if (numOfDigits == TWO_DIGITS.numOfDigits) {
      return TWO_DIGITS;
    } else if (numOfDigits == FOUR_DIGITS.numOfDigits) {
      return FOUR_DIGITS;
    } else if (numOfDigits == FIVE_DIGITS.numOfDigits) {
      return FIVE_DIGITS;
    } else { //By default return the 3 digits constant.
      return THREE_DIGITS;
    }

  }

  const [canIncrease, setCanIncrease] = useState(true);
  const [canDecrease, setCanDecrease] = useState(true);
  const [digit, setDigit] = useState(calculateDigit(props.numOfDigits)); //By default it is 3 digits

  //********************************//


  //This method is called when the 'increase the amount of digits' button has
  //  been pressed.
  //So if the 'increase the amount of digits' button has been disabled, then
  //  this method will NOT be called.
  //This method will also check whether we can actually increase the amount of
  //  digits or not.
  const increaseDigit = () => {

    const current = digit.numOfDigits;
    const incrBtnDisableLimit = MAX_DIGITS - 1;

    //Update the digit
    const updated = current + 1;

    //********** At the next render cycle: ***********//
    //  . Change this DigitalEditor's digit
    //  . Change the parent's (SelectNumOfDigitsScreen) 'arrayOfDigits' array.
    //  . Change to whether allowed to increase or decrease or not

    setDigit(calculateDigit(updated));
    props.increaseFunc();

    if (current < incrBtnDisableLimit) {
      setCanDecrease(true);
    } else if (current == incrBtnDisableLimit) {
      setCanIncrease(false);
    }
    //***********************************************//

  }

  //This method is called when the 'decrease the amount of digits' button has
  //  been pressed.
  //So if the 'decrease the amount of digits' button has been disabled, then
  //  this method will NOT be called.
  //This method will also check whether we can actually decrease the amount of
  //  digits or not.
  const decreaseDigit = () => {

    const current = digit.numOfDigits;
    const decrBtnDisableLimit = MIN_DIGITS + 1;

    //Update the digit
    const updated = current - 1;

    //********** At the next render cycle: ***********//
    //  . Change this DigitalEditor's digit
    //  . Change the parent's (SelectNumOfDigitsScreen) 'arrayOfDigits' array.
    //  . Change to whether allowed to increase or decrease or not

    setDigit(calculateDigit(updated));
    props.decreaseFunc();

    if (current > decrBtnDisableLimit) {
      setCanIncrease(true);
    } else if (current == decrBtnDisableLimit) {
      setCanDecrease(false);
    }
    //***********************************************//
  }

  //Preparing the digits for displaying (aka. the text for displaying)
  var text = "  " + digit.text;
  if (props.additionalText) {
    text = props.additionalText + digit.text;
  }


  return(
    <View style={DigitEditorStyles.numberContainer}>

      <TouchableHighlight
        style={DigitEditorStyles.button}
        underlayColor={GlobalColors.PURPLE}
        disabled={!canDecrease}
        onPress={() => decreaseDigit()}>
          <View
            style={
              (!canDecrease)
              ? {...DigitEditorStyles.buttonView, ...DigitEditorStyles.buttonViewDisabled}
              : DigitEditorStyles.buttonView
            }>
            <Text style={DigitEditorStyles.buttonText}>{'\u02C5'}</Text>
          </View>
      </TouchableHighlight>

      <Text style={DigitEditorStyles.number}>{text}</Text>

      <TouchableHighlight
        style={DigitEditorStyles.button}
        underlayColor={GlobalColors.PURPLE}
        disabled={!canIncrease}
        onPress={() => increaseDigit()}>
          <View
            style={
              (!canIncrease)
              ? {...DigitEditorStyles.buttonView, ...DigitEditorStyles.buttonViewDisabled}
              : DigitEditorStyles.buttonView
            }>
            <Text style={DigitEditorStyles.buttonText}>{'\u02C4'}</Text>
          </View>
      </TouchableHighlight>

    </View>
  );

}

export default DigitEditor;
