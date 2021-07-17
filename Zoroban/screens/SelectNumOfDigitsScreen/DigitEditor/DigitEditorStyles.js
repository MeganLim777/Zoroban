import {StyleSheet} from 'react-native';
import GlobalColors from '../../../styles/Colors';

const DigitEditorStyles = StyleSheet.create({

    numberContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      width: '90%',
      marginTop: 5
    },

    number: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 25,
      textAlign: 'center'
    },

    button: {
      width: '20%',
      marginHorizontal: 15
    },

    buttonView: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: GlobalColors.DARK_BLUE
    },

    buttonViewDisabled: {
      backgroundColor: GlobalColors.GREY
    },

    buttonText: {
      fontSize: 35,
      color: GlobalColors.PLATINUM_WHITE
    }

});
export default DigitEditorStyles;
