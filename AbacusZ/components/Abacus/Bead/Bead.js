import React, {useEffect} from 'react';
import {View} from 'react-native';
import BeadStyles from './BeadStyles';

//This is the component for a SINGLE bead in the abacus.
const Bead = props => {

  useEffect(() => {
    console.log("Bead was called >>>>>>");
  });

  return(
    <View style={BeadStyles.bead}>

    </View>
  );

}

export default Bead;
