import {StyleSheet} from 'react-native';

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

    row1: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },

    row2: {
      marginTop: '5%',
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
});
export default SetConfigsScreenStyles;
