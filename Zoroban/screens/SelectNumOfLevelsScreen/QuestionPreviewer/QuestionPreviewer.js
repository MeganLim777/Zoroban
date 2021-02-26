import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import QuestionPreviewerStyles from './QuestionPreviewerStyles.js';

//This function returns the array to preview.
function levelsPreviewCreator(numofLevels) {

  if (numofLevels === 2) {

    return(['xx', 'xx']);

  } else if (numofLevels === 4) {

    return(['xx', 'xx', 'xx', 'xx']);

  } else if (numofLevels === 5) {

    return(['xx', 'xx', 'xx', 'xx', 'xx']);

  } else {

    return(['xx', 'xx', 'xx']); //By default, it is 3 levels.

  }
}

class QuestionPreviewer extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    const numofLevels = this.props.numofLevels;
    const lastIndex = numofLevels - 1;

    const arrayOfNumbers = (levelsPreviewCreator(numofLevels));

    //allNumbers is an array containing all the JSX code needed to display the preview question.
    const allNumbers = arrayOfNumbers.map((number, index) => {
        if (index !== lastIndex) {
          return (
            <Text key={index} style={QuestionPreviewerStyles.question}>     {number}</Text>
          );
        } else {
          return (
            <Text key={index} style={QuestionPreviewerStyles.question}>{this.props.operation}   {number}</Text>
          );
        }
    });

    return(

      <View>
        <View style={QuestionPreviewerStyles.questionContainer}>
          {allNumbers}
        </View>
        <Text style={QuestionPreviewerStyles.dummyAnswer}>xxxxx</Text>
      </View>
    );
  }

}

export default QuestionPreviewer;
