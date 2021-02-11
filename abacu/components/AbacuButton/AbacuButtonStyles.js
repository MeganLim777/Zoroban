import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors';

const AbacuButtonStyles = StyleSheet.create({
    button: {
      borderWidth: 3,
      borderColor: GlobalColors.PLATINUM_WHITE,
      borderRadius: 10,
      backgroundColor: GlobalColors.DARK_BLUE,
      alignItems: "center",
      padding: '3%'
    },

    buttonText: {
      color: GlobalColors.PLATINUM_WHITE
    }


});
export default AbacuButtonStyles;
