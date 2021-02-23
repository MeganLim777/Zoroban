import {StyleSheet} from 'react-native';
import GlobalColors from '../../../../../styles/Colors';

const InputAndResultsStyles = StyleSheet.create({

    componentContainer: {
      flex: 1,
      borderColor: 'green',
      borderWidth: 3,
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%'
    },

    textInput: {
      height: 40,
      width: '60%',
      borderWidth: 4,
      color: GlobalColors.PLATINUM_WHITE,
      textAlign: 'center',
      fontSize: 15
    },

    text: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 18
    },

    enterAnsMessageContainer: {
      width: '60%',
      borderColor: 'red',
      borderWidth: 2,
      alignItems: 'center'
    },

    resultsContainer: {
      width: '60%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: 'red',
      borderWidth: 2
    },

    resultBtnText: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 15
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
export default InputAndResultsStyles;
