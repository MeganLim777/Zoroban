import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors.js'

const SetConfigsScreenStyles = StyleSheet.create({

    screen: {
      flex: 1
    },

    titleContainer: {
      flex: 2,
      borderColor: 'orange',
      borderWidth: 3,
      justifyContent: 'center'
    },

    buttonsContainer: {
      flex: 8,
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: 3
    },

    text: {
      color: GlobalColors.PLATINUM_WHITE,
      fontSize: 30
    }
});
export default SetConfigsScreenStyles;
