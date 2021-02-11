import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors';

const PageTitleStyles = StyleSheet.create({

    title: {
      fontSize: 30,
      color: GlobalColors.LIGHT_BLUE,
      fontWeight: "bold",
      textAlign: 'center'
    },

    titleContainer: {
      flex: 1
    }


});
export default PageTitleStyles;
