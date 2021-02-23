import {StyleSheet} from 'react-native';
import GlobalColors from '../../../../../styles/Colors';

const QuestionDisplayerStyles = StyleSheet.create({

    text: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 25
    },

    question: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 28
    },

    questionContainer: {
      alignItems: 'flex-end'
    }

});
export default QuestionDisplayerStyles;
