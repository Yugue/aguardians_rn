import React, {useState} from 'react';
import {View} from 'react-native';
import ButtonGroupMultiple from '../Common/ButtonGroupMultiple';

const Signup = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <View>
      <ButtonGroupMultiple
        list={['Sign up as an user', 'Sign up as a volunteer']}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
    </View>
  );  
};

export default Signup;
