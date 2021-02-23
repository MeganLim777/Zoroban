import React, {Component} from 'react';
import {View, Text, Button, Animated, KeyboardAvoidingView} from 'react-native';
import AbacusContainerStyles from './AbacusContainerStyles.js';
import Abacus from '../../../../components/Abacus/Abacus';

class AbacusContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showAbacus: false,
      widthAbacusContainer: 0,
    }
  }

  //This function toggles the abacus to display and not display.
  toggleAbacus = () => {

    if (this.state.showAbacus) {
      this.setState({
        showAbacus: false
      });

    } else {
      this.setState({
        showAbacus: true
      });
    }

  }


  //This function gets the width of the abacusContainer (which is the
  // parent container to the abacus)
  onContainerLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    this.setState({
      widthAbacusContainer: width
    })
  }


  render() {

    //By default, show the abacus
    let abacus = (
      <Abacus parentWidth={parseInt(this.state.widthAbacusContainer)}/>
    );

    //If don't want to show abacus, then the 'abacus' varaible is null.
    if (!this.state.showAbacus) {
      abacus = (null);
    }

    return(
      <KeyboardAvoidingView enabled={false} style={AbacusContainerStyles.container} onLayout={this.onContainerLayout}>

        <Button title="I want abacus" onPress={this.toggleAbacus}/>

        {abacus}

      </KeyboardAvoidingView>
    );
  }

}

export default AbacusContainer;
