import React, {Dispatch, SetStateAction} from 'react';
import {ButtonGroup} from 'react-native-elements';

const ButtonGroupMultiple = ({
  list,
  selectedButton,
  setSelectedButton,
}: {
  list: string[];
  selectedButton: number;
  setSelectedButton: Dispatch<SetStateAction<number>>;
}) => {
  function updateIndex(selectedIndex: number) {
    setSelectedButton(selectedIndex);
  }

  return (
    <ButtonGroup
      onPress={updateIndex}
      selectedIndex={selectedButton}
      buttons={list}
      containerStyle={{height: 35}}
    />
  );
};

export default ButtonGroupMultiple;
