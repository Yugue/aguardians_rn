import React, { useState } from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onChangeEmail = Email => setEmail(Email);
  const onChangePassword = Password => setPassword(Password);

  function validateEmail() {
    const emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !emailRule.test(String(Email).toLowerCase());
  }

  function validatePassword() {
    const password_rule = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return !password_rule.test(String(Password));
  }
  const password_message = "Password must be minimum eight characters, at least one letter, one number and one special character!";

  return (
    <View style={{ marginTop: 20 }}>
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="Email"
        value={Email}
        onChangeText={onChangeEmail}
      />
      <HelperText type="error" visible={validateEmail()}>
        Email address is invalid!
      </HelperText>
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Password"
        value={Password}
        secureTextEntry={true}
        onChangeText={onChangePassword}
      />
      <HelperText type="error" visible={validatePassword()}>
        {password_message}
      </HelperText>
    </View>
  );
};

export default Login;
