import React, {useState} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import InputAndResultsStyles from './InputAndResultsStyles.js';
import GlobalColors from '../../../../../styles/Colors';

const InputAndResults = props => {

  let [inputAns, setInputAns] = useState("");
  let [canType, setCanType] = useState(true);
  let [textInputColor, setTextInputColor] = useState(GlobalColors.PLATINUM_WHITE);
  let [correctOrWrong, setCorrectOrWrong] = useState(
    <View style={InputAndResultsStyles.enterAnsMessageContainer}>
      <Text style={InputAndResultsStyles.text}>Enter your answer:</Text>
    </View>
  );


  // This function ensures that we only accept inputs that
  // contains numbers 0 - 9 and decimal points.
  const onChanged = (input) => {
    setInputAns(input.replace(/[^.0-9]/g, ''));
  }


  //This function is called when the user wants to give up.
  //When giving up, tell the user the real answer (in both the textInput and the message),
  //  and the textInput will be disabled
  //  and a button should go to next question.
  const giveUp = () => {
    setCorrectOrWrong(
      <View style={InputAndResultsStyles.resultsContainer}>
        <Text style={InputAndResultsStyles.correctAns}>Ans: {props.answer}</Text>

        <TouchableOpacity onPress={newQuestion}>
          <Text style={InputAndResultsStyles.resultBtnText}>Next question >></Text>
        </TouchableOpacity>
      </View>
    );

    //Tell user the real answer in the textInput,
    // disable the textInput and change the textInput border colour to green.
    setInputAns(props.answer.toString());
    setCanType(false);
    setTextInputColor(GlobalColors.GREEN);
  }


  //This function is called when asking for a new question
  const newQuestion = () => {

    //Generate the new random numbers and calculate the answer
    props.newQuestion();

    setCorrectOrWrong(
      <View style={InputAndResultsStyles.enterAnsMessageContainer}>
        <Text style={InputAndResultsStyles.text}>Enter your answer:</Text>
      </View>
    );

    //Resetting the textInput to be empty
    //and enable textInput and change the textInput border colour to white.
    setInputAns("");
    setCanType(true);
    setTextInputColor(GlobalColors.PLATINUM_WHITE);
  }


  //This function checks the answer and will say whether it is correct or wrong.
  //  If correct, then say 'Correct' message, disable textInput,
  //  change the border colour to green and show the 'Next question' button.
  //  If wrong, then say 'Sorry, try again' message and show 'Give up' button.
  const checkAns = () => {

    if (parseInt(inputAns) === props.answer) {

      setCorrectOrWrong(
        <View style={InputAndResultsStyles.resultsContainer}>
          <Text style={InputAndResultsStyles.correctAns}>Correct</Text>

          <TouchableOpacity onPress={newQuestion}>
            <Text style={InputAndResultsStyles.resultBtnText}>Next question >></Text>
          </TouchableOpacity>
        </View>
      );

      setCanType(false);
      setTextInputColor(GlobalColors.GREEN);

    } else {
      setCorrectOrWrong(
        <View style={InputAndResultsStyles.resultsContainer}>
          <Text style={InputAndResultsStyles.wrongAns}>Sorry, try again</Text>

          <TouchableOpacity onPress={giveUp}>
            <Text style={InputAndResultsStyles.resultBtnText}>Give up >></Text>
          </TouchableOpacity>
        </View>
      );
    }

  }

  return(
    <View style={InputAndResultsStyles.componentContainer}>

      {correctOrWrong}

      <TextInput
        style={{...InputAndResultsStyles.textInput, borderColor: textInputColor}}
        value={inputAns}
        keyboardType='number-pad'
        onChangeText={(text)=> onChanged(text)}
        editable={canType}
        selectTextOnFocus={canType}
        onSubmitEditing={checkAns}/>

    </View>
  );

}

export default InputAndResults;
