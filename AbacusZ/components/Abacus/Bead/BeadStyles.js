import {StyleSheet} from 'react-native';
import GlobalColors from '../../../styles/Colors';
import GlobalConstants from '../../../constants/Constants';

const BeadStyles = StyleSheet.create({

    bead: {
      width: GlobalConstants.BEAD_WIDTH,
      height: GlobalConstants.BEAD_HEIGHT,
      backgroundColor: GlobalColors.ABACUS_BROWN,
      borderRadius: 20,
      marginTop: 3
    }

})

export default BeadStyles;
