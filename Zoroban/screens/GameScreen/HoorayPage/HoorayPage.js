import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import ZorobanButton from '../../../components/ZorobanButton/ZorobanButton';
import HoorayPageStyles from './HoorayPageStyles.js';
import PageTitle from '../../../components/PageTitle/PageTitle';

class HoorayPage extends Component {

  render() {
    return(
      <View style={HoorayPageStyles.screen}>

          <View style={HoorayPageStyles.titleContainer}>
            <PageTitle>Hooray!</PageTitle>
          </View>

          <View style={HoorayPageStyles.buttonContainer}>
            <ZorobanButton
              title="Play again"
              titleFontSize="20"
              width="55%"
              onPress={() => this.props.navigation.navigate('Main')}/>

            <ZorobanButton
              title="Play again with different settings"
              titleFontSize="20"
              width="55%"
              onPress={() => this.props.navigation.navigate('Main')}/>
          </View>
      </View>
    );
  }

}

// withNavigation returns a component that wraps HoorayPage and passes in the
// navigation prop
export default withNavigation(HoorayPage);
