import {StyleSheet} from 'react-native';
import GlobalColors from '../../../../styles/Colors';

const QuestionAndAnswerStyles = StyleSheet.create({

    container: {
      flex: 1
    },

    questionNumContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    questionNumText: {
      color: GlobalColors.LIGHT_BLUE,
      fontSize: 25
    },

    questionContainer: {
      flex: 6,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    ansAndResultContainer: {
      flex: 5,
      alignItems: 'center'
    },

    text: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 18
    }

});
export default QuestionAndAnswerStyles;
