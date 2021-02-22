import React, {useState, useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import Bead from '../Bead/Bead';
import GlobalConstants from '../../../constants/Constants';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

//This is the component for a SIGNLE COLUMN of beads in the BOTTOM rack of
// the abacus.
const BottomRackColBeads = props => {

  const containerHeight = 7 * GlobalConstants.BEAD_HEIGHT;
  const swipeUpYValue = -(containerHeight - (4 * GlobalConstants.BEAD_HEIGHT) - 13);
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

    console.log("amount to swipe down: ", amount2Change);

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

    console.log("amount to swipe up: ", amount2Change);

    //Move the bead up in 0.3 secs.
    Animated.timing(value2Change, {
      toValue: amount2Change,
      duration: 300,
      useNativeDriver: true
    }).start();

  }



  //This function is called when the first bead is swiped down.
  const on1stSwipeDown = (state) => {

    console.log("You swiped down 1st bead");

    //If the 1st bead is up, then push it down
    if (currentState1st === 1) {
      console.log("currentState: ", currentState1st);
      console.log("You can move down this bead");

      onSwipeDown(state, firstMoveY, currentState1st);
      setCurrentState1st(0);


      //See if the 2nd bead needs pushing down too.
      //(The 2nd bead's state check is inside this function already.)
      //(Also this on2ndSwipeDown function will check if the
      //3rd bead (and subsequently the 4th bead) needs to all be pushed down too.)
      on2ndSwipeDown(state);

    } else { //If the 1st bead is already down, then definitly cannot push it down even more.
      console.log("currentState: ", currentState1st);
      console.log("You CANNOT move down");
    }


  }

  //This function is called when the first bead is swiped up.
  const on1stSwipeUp = (state) => {

    console.log("You swiped up 1st bead");

    //If the 1st bead is down, then push it up
    if (currentState1st === 0) {

      console.log("currentState: ", currentState1st);
      console.log("You can move up this bead");

      onSwipeUp(state, firstMoveY, currentState1st);
      setCurrentState1st(1);
    } else { //If the 1st bead is already up, then definitly cannot push it down up even more.
      console.log("currentState: ", currentState1st);
      console.log("You CANNOT move up");
    }

  }




  //This function is called when the 2nd bead is swiped down.
  const on2ndSwipeDown = (state) => {

    console.log("You swiped down 2nd bead");

    //If the 2nd bead is up, then push it down
    if (currentState2nd === 1) {

      console.log("currentState: ", currentState2nd);
      console.log("You can move down this bead");

      onSwipeDown(state, secondMoveY, currentState2nd);
      setCurrentState2nd(0);


      //See if the 3rd bead needs pushing down too.
      //(The 3rd bead's state check is inside this function already.)
      //(Also this on3rdSwipeDown function will check if the
      //4th bead needs to be pushed down too.)
      on3rdSwipeDown(state);

    } else { //If the 2nd bead is already down, then definitly cannot push it down even more.
      console.log("currentState: ", currentState2nd);
      console.log("You CANNOT move down");
    }
  }

  //This function is called when the 2nd bead is swiped up.
  const on2ndSwipeUp = (state) => {

    console.log("You swiped up 2nd bead");

    //See if the 1st bead needs pushing up too.
    //(The 1st bead's state check is inside this function already.)
    on1stSwipeUp(state);

    //If the 2nd bead is down, then push it up
    if (currentState2nd === 0) {
      console.log("currentState: ", currentState2nd);
      console.log("You can move up this bead");
      onSwipeUp(state, secondMoveY, currentState2nd);
      setCurrentState2nd(1);
    } else { //If the 2nd bead is already up, then definitly cannot push it up even more.
      console.log("currentState: ", currentState2nd);
      console.log("You CANNOT move up");
    }

  }



  //This function is called when the 3rd bead is swiped down.
  const on3rdSwipeDown = (state) => {

    console.log("You swiped down 3rd bead");

    //If the 3rd bead is up, then push it down
    if (currentState3rd === 1) {

      console.log("currentState: ", currentState3rd);
      console.log("You can move down this bead");

      onSwipeDown(state, thirdMoveY, currentState3rd);
      setCurrentState3rd(0);

      //See if the 4th bead needs pushing down too.
      //(The 3rd bead's state check is inside this function already.)
      on4thSwipeDown(state);

    } else { //If the 3rd bead is already down, then definitly cannot push it down even more.
      console.log("currentState: ", currentState3rd);
      console.log("You CANNOT move down");
    }
  }

  //This function is called when the 3rd bead is swiped up.
  const on3rdSwipeUp = (state) => {

    console.log("You swiped up 3rd bead");

    //See if the 2nd bead needs pushing up too.
    //(The 2nd bead's state check is inside this function already.)
    //(Also this on2ndSwipeUp function will check if the
    //1st bead needs to be pushed up too.)
    on2ndSwipeUp(state);

    //If the 3rd bead is down, then push it up
    if (currentState3rd === 0) {
      console.log("currentState: ", currentState3rd);
      console.log("You can move up this bead");
      onSwipeUp(state, thirdMoveY, currentState3rd);
      setCurrentState3rd(1);
    } else { //If the 3rd bead is already up, then definitly cannot push it up even more.
      console.log("currentState: ", currentState3rd);
      console.log("You CANNOT move up");
    }

  }



  //This function is called when the 4th bead is swiped down.
  const on4thSwipeDown = (state) => {

    console.log("You swiped down 4th bead");

    //If the 4th bead is up, then push it down
    if (currentState4th === 1) {

      console.log("currentState: ", currentState4th);
      console.log("You can move down this bead");

      onSwipeDown(state, forthMoveY, currentState4th);
      setCurrentState4th(0);
    } else { //If the 4th bead is already down, then definitly cannot push it down even more.
      console.log("currentState: ", currentState4th);
      console.log("You CANNOT move down");
    }
  }

  //This function is called when the 4th bead is swiped up.
  const on4thSwipeUp = (state) => {

    console.log("You swiped up 4th bead");

    //See if the 3rd bead needs pushing up too.
    //(The 3rd bead's state check is inside this function already.)
    //(Also this on3rdSwipeUp function will check if the
    //2nd bead (and subsequently the 1st bead) needs to all be pushed up too.)
    on3rdSwipeUp(state);

    //If the 4th bead is down, then push it up
    if (currentState4th === 0) {
      console.log("currentState: ", currentState4th);
      console.log("You can move up this bead");

      onSwipeUp(state, forthMoveY, currentState4th);
      setCurrentState4th(1);
    } else { //If the 4th bead is already up, then definitly cannot push it up even more.
      console.log("currentState: ", currentState4th);
      console.log("You CANNOT move up");
    }

  }


  useEffect(() => {
    console.log("BottomRackColBeads WAS CALLED!!!!")
  });

  return(
    <View style={{height: containerHeight, justifyContent: 'flex-end', borderColor: 'yellow', borderWidth: 1}}>
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
