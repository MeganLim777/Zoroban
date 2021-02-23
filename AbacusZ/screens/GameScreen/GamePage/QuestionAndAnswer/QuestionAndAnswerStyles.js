import {StyleSheet} from 'react-native';
import GlobalColors from '../../../../styles/Colors';

const QuestionAndAnswerStyles = StyleSheet.create({

    container: {
      flex: 1
    },

    questionContainer: {
      flex: 3,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    ansAndResultContainer: {
      flex: 2,
      alignItems: 'center'
    },

    text: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 18
    }

});
export default QuestionAndAnswerStyles;
