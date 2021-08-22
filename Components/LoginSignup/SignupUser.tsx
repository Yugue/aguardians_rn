import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import SignupSection from '../Common/LoginSignup/SignupSection';

const SignupUser = () => {
  return (
    <View>
      <SignupSection userType="user"></SignupSection>
    </View>
  );
};

export default SignupUser;
