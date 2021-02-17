import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AbacusStyles from './AbacusStyles';
import BottomRackColBeads from './BottomRackColBeads/BottomRackColBeads';
import Bead from './Bead/Bead';
import GlobalConstants from '../../constants/Constants';


//This function will make the whole top rack of beads
const makingTopBeads = (lastIndex) => {

  var allBeads = [];

  for (var i = 0; i < lastIndex; i++) {
    allBeads.push(<Bead key={i} />);
  }

  return allBeads;
}


//This function will make the whole bottom rack of beads
const makingBottomBeads = (lastIndex) => {

  var allBeads = [];

  for (var i = 0; i < lastIndex; i++) {
    allBeads.push(<BottomRackColBeads key={i} />);
  }

  return allBeads;
}


const Abacus = props => {

  //Calculating how many columns of beads can fit inside the abacus.
  //(Calculating based on the width of the parent container).
  var numOfBeadsColumns = parseInt((props.parentWidth) / GlobalConstants.BEAD_WIDTH);

  //Calculating the last index of all the columns of beads.
  var numOfBeadsLastIndex = numOfBeadsColumns - 1;

  //Getting all the beads of the abacus, both the top and bottom rack.
  const [topRackBeads, setTopRackBeads] = useState(makingTopBeads(numOfBeadsLastIndex));
  const [bottomRackBeads, setBottomRackBeads] = useState(makingBottomBeads(numOfBeadsLastIndex));


  return(
    <View style={AbacusStyles.container}>

      <View style={AbacusStyles.topRack}>
        {topRackBeads}
      </View>

      <View style={AbacusStyles.bottomRack}>
        {bottomRackBeads}
      </View>

    </View>
  );

}

export default Abacus;
