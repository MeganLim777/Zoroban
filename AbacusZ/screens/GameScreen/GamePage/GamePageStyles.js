import {StyleSheet} from 'react-native';
import GlobalColors from '../../../styles/Colors';

const GamePageStyles = StyleSheet.create({

    screen: {
      flex: 1
    },

    questionContainer: {
      flex: 3,
      borderColor: 'yellow',
      borderWidth: 3
    },

    answerContainer: {
      flex: 2,
      borderColor: 'orange',
      borderWidth: 3
    },

    abacusContainer: {
      flex: 4,
      borderColor: 'blue',
      borderWidth: 3
    },

    text: {
      color: GlobalColors.PLATINUM_WHITE
    }

});
export default GamePageStyles;
