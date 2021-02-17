import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors';

const AbacusStyles = StyleSheet.create({

    container: {
      flex: 1,
      borderColor: 'white',
      borderWidth: 3,
      padding: '1%',
      width: '100%'
    },

    topRack: {
      flex: 1,
      width: '100%',
      borderBottomColor: GlobalColors.ABACUS_WHITE,
      borderBottomWidth: 3,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    bottomRack: {
      flex: 3,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch'
    }



});
export default AbacusStyles;
