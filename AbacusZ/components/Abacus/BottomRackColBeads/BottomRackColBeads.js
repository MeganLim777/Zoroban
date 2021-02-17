import React, {useEffect} from 'react';
import {View} from 'react-native';
import Bead from '../Bead/Bead';

//This is the component for a SIGNLE COLUMN of beads in the BOTTOM rack of
// the abacus.
const BottomRackColBeads = props => {

  // useEffect(() => {
  //   console.log("BottomRackColBeads rendered");
  // });

  return(
    <View style={{justifyContent: 'flex-end'}}>
      <Bead />
      <Bead />
      <Bead />
      <Bead />
    </View>
  );

}

export default BottomRackColBeads;
