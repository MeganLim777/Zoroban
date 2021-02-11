import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors';

const ConfigsButtonStyles = StyleSheet.create({
    button: {
      borderWidth: 3,
      borderColor: GlobalColors.PLATINUM_WHITE,
      borderRadius: 10,
      backgroundColor: GlobalColors.DARK_BLUE,
      alignItems: 'center',
      padding: '3%'
    },

    buttonTextContainer: {
      alignItems: 'center'
    },

    buttonText: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 20
    },

    buttonSubText: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 15
    }


});
export default ConfigsButtonStyles;
