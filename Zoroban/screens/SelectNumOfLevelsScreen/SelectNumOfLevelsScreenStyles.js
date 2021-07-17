import {StyleSheet} from 'react-native';
import GlobalColors from '../../styles/Colors.js'

const SetConfigsScreenStyles = StyleSheet.create({

    screen: {
      flex: 1
    },

    titleContainer: {
      flex: 2,
      justifyContent: 'center'
    },

    bodyContainer: {
      flex: 8,
      alignItems: 'center'
    },

    levelsEditorContainer: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '70%'
    },

    levelsEditor: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100%'
    },

    button: {
      height: '30%',
      width: '50%'
    },

    buttonView: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: GlobalColors.DARK_BLUE
    },

    buttonViewDisabled: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: GlobalColors.GREY
    },

    buttonText: {
      fontSize: 35,
      color: GlobalColors.PLATINUM_WHITE
    },

    levelText: {
      height: '30%',
      fontSize: 25,
      color: GlobalColors.PLATINUM_WHITE,
      textAlign: 'center'
    },

    levelsEditorLabel: {
      flex: 1,
      fontSize: 25,
      color: GlobalColors.PLATINUM_WHITE,
      textAlignVertical: 'center'
    },

    questionPreview: {
      flex: 4
    },

    nextBtnContainer: {
      flex: 2,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }
});
export default SetConfigsScreenStyles;
