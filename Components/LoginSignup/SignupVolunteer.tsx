import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import SignupSection from '../Common/LoginSignup/SignupSection';

const SignupVolunteer = () => {
  return (
    <View>
      <SignupSection userType="volunteer"></SignupSection>
    </View>
  );
};

export default SignupVolunteer;
