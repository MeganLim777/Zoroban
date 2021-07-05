import {StyleSheet} from 'react-native';
import GlobalColors from '../../../../styles/Colors';

const AbacusContainerStyles = StyleSheet.create({

    container: {
      flex: 1,
      padding: '1%',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    toggleAbacusBtn: {
      alignItems: 'center'
    },

    toggleAbacusBtnText: {
      color: GlobalColors.LIGHT_BLUE
    }

})

export default AbacusContainerStyles;
