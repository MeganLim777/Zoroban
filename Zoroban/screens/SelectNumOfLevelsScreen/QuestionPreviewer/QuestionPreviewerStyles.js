import {StyleSheet} from 'react-native';
import GlobalColors from '../../../styles/Colors';

const QuestionDisplayerStyles = StyleSheet.create({

    question: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 25
    },

    questionContainer: {
      alignItems: 'flex-end',
      borderColor: GlobalColors.PLATINUM_WHITE,
      borderBottomWidth: 3
    },

    dummyAnswer: {
      color: GlobalColors.GREEN,
      fontSize: 25
    }

});
export default QuestionDisplayerStyles;
