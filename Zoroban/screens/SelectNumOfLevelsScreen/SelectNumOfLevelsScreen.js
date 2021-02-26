import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import SelectNumOfLevelsScreenStyles from './SelectNumOfLevelsScreenStyles.js';
import PageTitle from '../../components/PageTitle/PageTitle';
import ZorobanButton from '../../components/ZorobanButton/ZorobanButton';
import QuestionPreviewer from './QuestionPreviewer/QuestionPreviewer';
import GlobalColors from '../../styles/Colors.js'


const SelectNumOfLevelsScreen = props => {

  const [levelAmount, setLevelAmount] = useState(3);
  const [canIncrease, setCanIncrease] = useState(true);
  const [canDecrease, setCanDecrease] = useState(true);

  //This method is called when we want to INcrease the number of levels.
  //If we have reached the max amount of levels (5),
  //then this method will definitely NOT be called.
  const increaseLevel = () => {

    //At the next render cycle:
    //   . Change the level amount if needed.
    //   . Change whether allowed to increase or decrease
    if (levelAmount < 4) {
      setLevelAmount(levelAmount + 1);
      setCanDecrease(true);
    } else if (levelAmount === 4) {
      //There are now 4 levels.
      //5 levels is the max.
      //So if we add 1 level now, at the next render cycle, there will be 5 levels.
      setLevelAmount(levelAmount + 1);
      setCanIncrease(false);
    }
  }

  //This method is called when we want to DEcrease the number of levels.
  //If we have reached the min amount of levels (2),
  //then this method will definitely NOT be called.
  const decreaseLevel = () => {

    //At the next render cycle:
    //   . Change the level amount if needed.
    //   . Change whether allowed to increase or decrease
    if (levelAmount > 3) {
      setLevelAmount(levelAmount - 1);
      setCanIncrease(true);
    } else if (levelAmount === 3) {
      //There are now 3 levels.
      //2 levels is the min.
      //So if we minus 1 level now, at the next render cycle, there will be 2 levels.
      setLevelAmount(levelAmount - 1);
      setCanDecrease(false);
    }
  }


  const chosenOperation = props.navigation.state.params.operation;

  return(
    <View style={SelectNumOfLevelsScreenStyles.screen}>

      <View style={SelectNumOfLevelsScreenStyles.titleContainer}>
        <PageTitle>Select number of levels</PageTitle>
      </View>

      <View style={SelectNumOfLevelsScreenStyles.bodyContainer}>

        <View style={SelectNumOfLevelsScreenStyles.levelsEditorContainer}>
          <View style={SelectNumOfLevelsScreenStyles.levelsEditor}>

            <TouchableHighlight
              style={SelectNumOfLevelsScreenStyles.button}
              underlayColor={GlobalColors.PURPLE}
              disabled={!canIncrease}
              onPress={() => increaseLevel()}>

                <View
                  style={
                    (!canIncrease)
                    ? {...SelectNumOfLevelsScreenStyles.buttonView, ...SelectNumOfLevelsScreenStyles.buttonViewDisabled}
                    : SelectNumOfLevelsScreenStyles.buttonView
                  }>
                      <Text style={SelectNumOfLevelsScreenStyles.buttonText}>{'\u02C4'}</Text>
                </View>
            </TouchableHighlight>

            <Text style={SelectNumOfLevelsScreenStyles.levelText}>{levelAmount}</Text>

            <TouchableHighlight
              style={SelectNumOfLevelsScreenStyles.button}
              underlayColor={GlobalColors.PURPLE}
              disabled={!canDecrease}
              onPress={() => decreaseLevel()}>
              <View
                style={
                  (!canDecrease)
                  ? {...SelectNumOfLevelsScreenStyles.buttonView, ...SelectNumOfLevelsScreenStyles.buttonViewDisabled}
                  : SelectNumOfLevelsScreenStyles.buttonView
                }>
                      <Text style={SelectNumOfLevelsScreenStyles.buttonText}>{'\u02C5'}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={SelectNumOfLevelsScreenStyles.levelsEditorLabel}>levels</Text>
        </View>

        <View style={SelectNumOfLevelsScreenStyles.questionPreview}>
          <QuestionPreviewer numofLevels={levelAmount} operation={chosenOperation}/>
        </View>

        <View style={SelectNumOfLevelsScreenStyles.nextBtnContainer}>
          <ZorobanButton
            title="Next"
            titleFontSize="20"
            width="100%"
            onPress={() => props.navigation.navigate('SelectNumOfDigits', {
              operation: chosenOperation,
              numOfLevels: levelAmount
            })}/>
        </View>

      </View>

    </View>
  );

}

export default SelectNumOfLevelsScreen;
