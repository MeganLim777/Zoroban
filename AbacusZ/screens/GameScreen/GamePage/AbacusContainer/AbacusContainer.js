import React, {Component} from 'react';
import {View, Text, Button, Animated} from 'react-native';
import AbacusContainerStyles from './AbacusContainerStyles.js';
import Abacus from '../../../../components/Abacus/Abacus';

class AbacusContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showAbacus: false
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


  render() {

    let abacus = (
      <Abacus />
    );

    //If don't want to show abacus
    if (!this.state.showAbacus) {
      abacus = (null);
    }

    return(
      <View style={AbacusContainerStyles.container}>

        <Button title="I want abacus" onPress={this.toggleAbacus}/>

        {abacus}

      </View>
    );
  }

}

export default AbacusContainer;
