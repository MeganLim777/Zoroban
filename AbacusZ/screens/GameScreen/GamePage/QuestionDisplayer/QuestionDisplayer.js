import React, {useState} from 'react';
import {View, Text} from 'react-native';
import QuestionDisplayerStyles from './QuestionDisplayerStyles.js';


const QuestionDisplayer = props => {

  const numofNumbers = props.arrayOfNumbers.length;
  const lastIndex = numofNumbers - 1;

  //allNumbers is an array containing all the JSX code needed to display the question
  const allNumbers = props.arrayOfNumbers.map((number, index) => {
      if (index !== lastIndex) {
        return (
          <Text key={index} style={QuestionDisplayerStyles.question}>     {number}</Text>
        );
      } else {
        return (
          <Text key={index} style={QuestionDisplayerStyles.question}>{props.operation}   {number}</Text>
        );
      }
  });

  return(

    <View style={QuestionDisplayerStyles.questionContainer}>
      {allNumbers}
    </View>
  );

}

export default QuestionDisplayer;
