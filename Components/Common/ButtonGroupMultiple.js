import React, {useState} from 'react';
import {ButtonGroup} from 'react-native-elements';

const ButtonGroupMultiple = ({list, selectedButton, setSelectedButton}) => {
  const buttons = ['Sign up as an user', 'Sign up as a volunteer'];   

  function updateIndex(selectedIndex) {
    setSelectedButton(selectedIndex);
  }

  return (
    <ButtonGroup
      onPress={updateIndex}
      selectedIndex={selectedButton}
      buttons={list}
      countainerStyle={{height: 100}}
    />
  );
};

export default ButtonGroupMultiple;
