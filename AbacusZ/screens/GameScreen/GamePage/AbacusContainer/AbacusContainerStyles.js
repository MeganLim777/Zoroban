import {StyleSheet} from 'react-native';
import GlobalColors from '../../../../styles/Colors';

const AbacusContainerStyles = StyleSheet.create({

    container: {
      flex: 1,
      borderColor: 'red',
      borderWidth: 3,
      padding: '1%',
      alignItems: 'center'
    },

    toggleAbacusBtn: {
      borderColor: 'white',
      borderWidth: 3,
      alignItems: 'center'
    },

    toggleAbacusBtnText: {
      color: GlobalColors.LIGHT_BLUE
    }

})

export default AbacusContainerStyles;
