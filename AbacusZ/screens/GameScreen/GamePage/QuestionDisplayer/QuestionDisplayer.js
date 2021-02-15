import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import QuestionDisplayerStyles from './QuestionDisplayerStyles.js';


class QuestionDisplayer extends PureComponent {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("QuestionDisplayer rendered3");
  };

  render() {

    const numofNumbers = this.props.arrayOfNumbers.length;
    const lastIndex = numofNumbers - 1;

    //allNumbers is an array containing all the JSX code needed to display the question
    const allNumbers = this.props.arrayOfNumbers.map((number, index) => {
        if (index !== lastIndex) {
          return (
            <Text key={index} style={QuestionDisplayerStyles.question}>     {number}</Text>
          );
        } else {
          return (
            <Text key={index} style={QuestionDisplayerStyles.question}>{this.props.operation}   {number}</Text>
          );
        }
    });

    return(

      <View style={QuestionDisplayerStyles.questionContainer}>
        {allNumbers}
      </View>
    );
  }

}

export default QuestionDisplayer;
