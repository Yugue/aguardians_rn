import React, {useState} from 'react';
import {View} from 'react-native';
import ButtonGroupMultiple from '../Common/ButtonGroupMultiple';
import SignupUser from './SignupUser';

const Signup = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <View>
      <ButtonGroupMultiple
        list={['Sign up as an user', 'Sign up as a volunteer']}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {selectedButton === 0 ? <SignupUser/> : <View></View>}
    </View>
  );  
};

export default Signup;
