import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import SignupSection from '../Common/LoginSignup/SignupSection';

const SignupUser = () => {
  const [isSubmit, setisSubmit] = useState(false);

  return (
    <View>
      <SignupSection isSubmit={isSubmit}></SignupSection>
      <Button
        mode="contained"
        onPress={() => setisSubmit(true)}
        style={{
          width: 100,
          marginTop: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 50,
        }}>
        Sign up
      </Button>
    </View>
  );
};

export default SignupUser;
