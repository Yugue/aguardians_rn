import React, { useState } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { Title, Paragraph, Card } from 'react-native-paper';
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
    <View style={{marginHorizontal: 10}}>
      <Title style={{textAlign: 'center', marginVertical: 25}}>Aguardians</Title>
      <Paragraph style={{textAlign: 'center', marginBottom: 25}}>Free accompanying services for the asian communities.
        You can use this service for entirely free of charge,
        or sign up as a volunteer to help people around you.</Paragraph>
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
