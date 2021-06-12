import React, { useState } from 'react';
import { Text, ButtonGroup } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from "react-native";
import Login from './Login';
import Signup from './Signup';

const AuthSection = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const buttons = ['Login', "Signup"]

  function updateIndex(selectedIndex) {
    setSelectedButton(selectedIndex);
  }

  return (
    <View>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedButton}
        buttons={buttons}
        countainerStyle={{ height: 100 }}
      />
      {selectedButton === 0 ? <Login /> : <Signup />}
    </View>
  );
};


export default AuthSection;
