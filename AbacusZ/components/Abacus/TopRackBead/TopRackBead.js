import React, {Component, useRef, useState, useEffect} from 'react';
import {View, Text, Animated} from 'react-native';
import Bead from '../Bead/Bead';
import GlobalConstants from '../../../constants/Constants';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

//This is the component for a SINGLE bead in the top rack of the abacus.
const TopRackBead = () => {

  const [containerHeight, setContainerHeight] = useState(GlobalConstants.BEAD_HEIGHT);
  const [swipeDownYValue, setSwipeDownYValue] = useState(0);
  const [swipeUpYValue, setSwipeUpYValue] = useState(0);

  //State 1 = bead is up, State 0 = bead is down
  const [currentState, setCurrentState] = useState(1);

  // moveY will be used as the value for the bead's y-coordinate.
  const moveY = useRef(new Animated.Value(0)).current;


  //This function will be called when the bead is swipped down.
  const onSwipeDown = (gestureState) => {
    console.log("You swiped down");

    //If the bead is currently up, move it down,
    //then set the state to be 0 (down).
    if (currentState === 1) {
      console.log("currentState: ", currentState);
      console.log("You can move down");

      //Move the bead down in 0.3 secs.
      Animated.timing(moveY, {
        toValue: swipeDownYValue,
        duration: 300,
        useNativeDriver: true
      }).start();

      setCurrentState(0);

    } else {
      console.log("currentState: ", currentState);
      console.log("You CANNOT move down");
    }

  }


  //This function will be called when the bead is swipped up.
  const onSwipeUp = (gestureState) => {
    console.log("You swiped up");

    //If the bead is currently down, move it up,
    //then set the state to be 1 (up).
    if (currentState === 0) {
      console.log("currentState: ", currentState);
      console.log("You can move up");

      //Move the bead up in 0.3 secs.
      Animated.timing(moveY, {
        toValue: swipeUpYValue,
        duration: 300,
        useNativeDriver: true
      }).start();

      setCurrentState(1);

    } else {
      console.log("currentState: ", currentState);
      console.log("You CANNOT move up");
    }

  }


  //This function saves the height of the bead's surrounding container
  // and also get the y-coordinate that the bead should swipe down to.
  const onContainerLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    const heightInt = parseInt(height);

    setContainerHeight(heightInt);

    setSwipeDownYValue(heightInt - GlobalConstants.BEAD_HEIGHT - 7);
  }

  useEffect(() => {
    console.log("TopRackBead rendered");
  });


  return(
    <View style={{borderColor: 'blue', borderWidth: 1}} onLayout={onContainerLayout}>
        <GestureRecognizer
          onSwipeDown={(state) => onSwipeDown(state)}
          onSwipeUp={(state) => onSwipeUp(state)}>

          <Animated.View style={{transform: [{translateX: 0}, {translateY: moveY}] }}>
            <Bead />
          </Animated.View>

        </GestureRecognizer>

    </View>
  );


}


export default TopRackBead;
