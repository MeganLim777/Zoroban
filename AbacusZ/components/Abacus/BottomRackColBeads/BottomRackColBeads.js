import React, {useState, useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import Bead from '../Bead/Bead';
import GlobalConstants from '../../../constants/Constants';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

//This is the component for a SINGLE COLUMN of beads in the BOTTOM rack of
// the abacus.
const BottomRackColBeads = props => {

  const containerHeight = 7 * GlobalConstants.BEAD_HEIGHT;
  const swipeUpYValue = -(containerHeight - (4 * GlobalConstants.BEAD_HEIGHT) - 12);
  const swipeDownYValue = 0;

  //1st top bead
  const [currentState1st, setCurrentState1st] = useState(0); //State 1 = bead is up, State 0 = bead is down
  const firstMoveY = useRef(new Animated.Value(0)).current; //The value for the 1st bead's y-coordinate.

  //2nd bead from the top
  const [currentState2nd, setCurrentState2nd] = useState(0); //State 1 = bead is up, State 0 = bead is down
  const secondMoveY = useRef(new Animated.Value(0)).current; //The value for the 2nd bead's y-coordinate.

  //3rd bead from the top
  const [currentState3rd, setCurrentState3rd] = useState(0); //State 1 = bead is up, State 0 = bead is down
  const thirdMoveY = useRef(new Animated.Value(0)).current; //The value for the 3rd bead's y-coordinate.

  //4th bead from the top
  const [currentState4th, setCurrentState4th] = useState(0); //State 1 = bead is up, State 0 = bead is down
  const forthMoveY = useRef(new Animated.Value(0)).current; //The value for the 4th bead's y-coordinate.


  //This function will be called when the bead is swipped down.
  const onSwipeDown = (gestureState, value2Change, thisBeadState) => {

    let amount2Change = swipeDownYValue;

    //Move the bead down in 0.3 secs.
    Animated.timing(value2Change, {
      toValue: amount2Change,
      duration: 300,
      useNativeDriver: true
    }).start();

  }

  //This function will be called when the bead is swipped up.
  const onSwipeUp = (gestureState, value2Change, thisBeadState) => {

    let amount2Change = swipeUpYValue;

    //Move the bead up in 0.3 secs.
    Animated.timing(value2Change, {
      toValue: amount2Change,
      duration: 300,
      useNativeDriver: true
    }).start();

  }



  //This function is called when the first bead is swiped down.
  const on1stSwipeDown = (state) => {

    //If the 1st bead is up, then push it down
    if (currentState1st === 1) {

      onSwipeDown(state, firstMoveY, currentState1st);
      setCurrentState1st(0);


      //See if the 2nd bead needs pushing down too.
      //(The 2nd bead's state check is inside this function already.)
      //(Also this on2ndSwipeDown function will check if the
      //3rd bead (and subsequently the 4th bead) needs to all be pushed down too.)
      on2ndSwipeDown(state);

    }

    //If the 1st bead is already down, then definitly cannot push it down even more.


  }

  //This function is called when the first bead is swiped up.
  const on1stSwipeUp = (state) => {

    //If the 1st bead is down, then push it up
    if (currentState1st === 0) {
      onSwipeUp(state, firstMoveY, currentState1st);
      setCurrentState1st(1);
    }

    //If the 1st bead is already up, then definitly cannot push it down up even more.

  }




  //This function is called when the 2nd bead is swiped down.
  const on2ndSwipeDown = (state) => {

    //If the 2nd bead is up, then push it down
    if (currentState2nd === 1) {

      onSwipeDown(state, secondMoveY, currentState2nd);
      setCurrentState2nd(0);


      //See if the 3rd bead needs pushing down too.
      //(The 3rd bead's state check is inside this function already.)
      //(Also this on3rdSwipeDown function will check if the
      //4th bead needs to be pushed down too.)
      on3rdSwipeDown(state);

    }

    //If the 2nd bead is already down, then definitly cannot push it down even more.

  }

  //This function is called when the 2nd bead is swiped up.
  const on2ndSwipeUp = (state) => {

    //See if the 1st bead needs pushing up too.
    //(The 1st bead's state check is inside this function already.)
    on1stSwipeUp(state);

    //If the 2nd bead is down, then push it up
    if (currentState2nd === 0) {
      onSwipeUp(state, secondMoveY, currentState2nd);
      setCurrentState2nd(1);
    }

    //If the 2nd bead is already up, then definitly cannot push it up even more.

  }



  //This function is called when the 3rd bead is swiped down.
  const on3rdSwipeDown = (state) => {

    //If the 3rd bead is up, then push it down
    if (currentState3rd === 1) {

      onSwipeDown(state, thirdMoveY, currentState3rd);
      setCurrentState3rd(0);

      //See if the 4th bead needs pushing down too.
      //(The 3rd bead's state check is inside this function already.)
      on4thSwipeDown(state);

    }

    //If the 3rd bead is already down, then definitly cannot push it down even more.
  }

  //This function is called when the 3rd bead is swiped up.
  const on3rdSwipeUp = (state) => {

    //See if the 2nd bead needs pushing up too.
    //(The 2nd bead's state check is inside this function already.)
    //(Also this on2ndSwipeUp function will check if the
    //1st bead needs to be pushed up too.)
    on2ndSwipeUp(state);

    //If the 3rd bead is down, then push it up
    if (currentState3rd === 0) {
      onSwipeUp(state, thirdMoveY, currentState3rd);
      setCurrentState3rd(1);
    }

    //If the 3rd bead is already up, then definitly cannot push it up even more.

  }



  //This function is called when the 4th bead is swiped down.
  const on4thSwipeDown = (state) => {

    //If the 4th bead is up, then push it down
    if (currentState4th === 1) {
      onSwipeDown(state, forthMoveY, currentState4th);
      setCurrentState4th(0);
    }

    //If the 4th bead is already down, then definitly cannot push it down even more.
  }

  //This function is called when the 4th bead is swiped up.
  const on4thSwipeUp = (state) => {

    //See if the 3rd bead needs pushing up too.
    //(The 3rd bead's state check is inside this function already.)
    //(Also this on3rdSwipeUp function will check if the
    //2nd bead (and subsequently the 1st bead) needs to all be pushed up too.)
    on3rdSwipeUp(state);

    //If the 4th bead is down, then push it up
    if (currentState4th === 0) {
      onSwipeUp(state, forthMoveY, currentState4th);
      setCurrentState4th(1);
    }

    //If the 4th bead is already up, then definitly cannot push it up even more.

  }

  return(
    <View style={{height: containerHeight, justifyContent: 'flex-end'}}>
      <GestureRecognizer
        onSwipeDown={(state) => on1stSwipeDown(state)}
        onSwipeUp={(state) => on1stSwipeUp(state)}>
        <Animated.View style={{transform: [{translateX: 0}, {translateY: firstMoveY}] }}>
          <Bead />
        </Animated.View>
      </GestureRecognizer>
      <GestureRecognizer
        onSwipeDown={(state) => on2ndSwipeDown(state)}
        onSwipeUp={(state) => on2ndSwipeUp(state)}>
        <Animated.View style={{transform: [{translateX: 0}, {translateY: secondMoveY}] }}>
          <Bead />
        </Animated.View>
      </GestureRecognizer>
      <GestureRecognizer
        onSwipeDown={(state) => on3rdSwipeDown(state)}
        onSwipeUp={(state) => on3rdSwipeUp(state)}>
        <Animated.View style={{transform: [{translateX: 0}, {translateY: thirdMoveY}] }}>
          <Bead />
        </Animated.View>
      </GestureRecognizer>
      <GestureRecognizer
        onSwipeDown={(state) => on4thSwipeDown(state)}
        onSwipeUp={(state) => on4thSwipeUp(state)}>
        <Animated.View style={{transform: [{translateX: 0}, {translateY: forthMoveY}] }}>
          <Bead />
        </Animated.View>
      </GestureRecognizer>
    </View>
  );

}

export default BottomRackColBeads;
