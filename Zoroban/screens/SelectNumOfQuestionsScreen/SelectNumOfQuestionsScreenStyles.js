import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors.js'

const SelectNumOfQuestionsScreenStyles = StyleSheet.create({

  screen: {
    flex: 1
  },

  titleContainer: {
    flex: 2,
    borderColor: 'orange',
    borderWidth: 3,
    justifyContent: 'center'
  },

  bodyContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'white',
    borderWidth: 3
  }

});

export default SelectNumOfQuestionsScreenStyles;
