import {StyleSheet} from 'react-native';
import GlobalColors from '../../../../styles/Colors';

const AbacusContainerStyles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      borderColor: 'red',
      borderWidth: 3,
      padding: '1%'
    },

    trying: {
      backgroundColor: 'yellow',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 100
    },

    randomView: {
      top: 50,
      right: 50,
      width: 100,
      height: 100,
      zIndex: 500,
      backgroundColor: 'yellow'
    }

});
export default AbacusContainerStyles;
