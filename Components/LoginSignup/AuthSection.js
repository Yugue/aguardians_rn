import React, {useState} from 'react';
import {Title, Paragraph, Card} from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
import Login from './Login';
import Signup from './Signup';
import ButtonGroupMultiple from '../Common/ButtonGroupMultiple';

const AuthSection = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <KeyboardAvoidingView behavior={'position'} style={{marginHorizontal: 20}}>
      <Title style={{textAlign: 'center', marginVertical: 20}}>
        Aguardians
      </Title>
      <Paragraph style={{textAlign: 'center', marginBottom: 20}}>
        Free accompanying services for the asian communities. You can use this
        service for entirely free of charge, or sign up as a volunteer to help
        people around you.
      </Paragraph>
      <ButtonGroupMultiple
        list={['Log in', 'Sign up']}
        selectedButton = {selectedButton}
        setSelectedButton = {setSelectedButton}
      />
      {selectedButton === 0 ? <Login /> : <Signup />}
    </KeyboardAvoidingView>
  );
};

export default AuthSection;
