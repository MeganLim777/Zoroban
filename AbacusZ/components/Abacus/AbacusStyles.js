import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors';

const AbacusStyles = StyleSheet.create({

    container: {
      flex: 1,
      borderColor: 'white',
      borderWidth: 3,
      padding: '1%'
    },

    topRack: {
      width: '100%',
      height: '20%',
      borderBottomColor: GlobalColors.ABACUS_WHITE,
      borderBottomWidth: 3
    }



});
export default AbacusStyles;
