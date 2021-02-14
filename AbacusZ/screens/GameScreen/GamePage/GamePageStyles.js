import {StyleSheet} from 'react-native';
import GlobalColors from '../../../styles/Colors';

const GamePageStyles = StyleSheet.create({

    screen: {
      flex: 1
    },

    questionContainer: {
      flex: 3,
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderColor: 'yellow',
      borderWidth: 3
    },

    answerContainer: {
      flex: 2,
      borderColor: 'orange',
      borderWidth: 3,
      justifyContent: 'space-around',
      alignItems: 'center'
    },

    abacusContainer: {
      flex: 4,
      borderColor: 'blue',
      borderWidth: 3
    },

    text: {
      color: GlobalColors.PLATINUM_WHITE
    },

    textInput: {
      height: 40,
      width: '50%',
      borderColor: GlobalColors.PLATINUM_WHITE,
      borderWidth: 4,
      color: GlobalColors.PLATINUM_WHITE,
      textAlign: 'center'
    },

    correctAns: {
      fontSize: 18,
      color: GlobalColors.GREEN
    },

    wrongAns: {
      fontSize: 18,
      color: GlobalColors.RED
    }

});
export default GamePageStyles;
