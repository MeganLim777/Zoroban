import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors.js'

const SelectNumOfDigitsScreenStyles = StyleSheet.create({

    screen: {
      flex: 1
    },

    titleContainer: {
      flex: 2,
      borderColor: 'orange',
      borderWidth: 3,
      justifyContent: 'center'
    },

    bodyContainer: {
      flex: 8,
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: 3
    },

    questionContainer: {
      alignItems: 'center',
      borderColor: GlobalColors.PLATINUM_WHITE,
      borderWidth: 3,
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
