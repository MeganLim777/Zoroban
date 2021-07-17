import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors.js'

const SelectNumOfDigitsScreenStyles = StyleSheet.create({

    screen: {
      flex: 1
    },

    titleContainer: {
      flex: 2,
      justifyContent: 'center'
    },

    bodyContainer: {
      flex: 8,
      alignItems: 'center'
    },

    questionContainer: {
      alignItems: 'center',
      flex: 3,
      width: '80%'
    },

    text: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 30
    },

    nextBtn: {
      flex: 1,
      width: '70%'
    }
});
export default SelectNumOfDigitsScreenStyles;
