import React, {useState} from 'react';
import {View} from 'react-native';
import {HelperText, TextInput, Text, Button} from 'react-native-paper';
import BlankView from './BlankView';

const EmailPassword = ({Email, setEmail, Password, setPassword, isSubmit}) => {
  const onChangeEmail = Email => setEmail(Email);
  const onChangePassword = Password => setPassword(Password);

  function EmailValid() {
    const emailRule =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRule.test(String(Email).toLowerCase());
  }

  function PasswordValid() {
    const password_rule =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return password_rule.test(String(Password));
  }
  const password_message =
    'Password must be minimum eight characters, at least one letter, one number and one special character!';

  return (
    <View style={{marginBottom: 0}}>
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="Email"
        value={Email}
        onChangeText={onChangeEmail}
        style={{height: 40}}
      />
      {isSubmit && !EmailValid() ? (
        <HelperText type="error" visible={true}>
          Email address is invalid!
        </HelperText>
      ) : <BlankView Width={10}></BlankView>}
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Password"
        value={Password}
        secureTextEntry={true}
        onChangeText={onChangePassword}
        style={{height: 40}}
      />
      {isSubmit && !PasswordValid() ? (
        <HelperText type="error" visible={true}>
          {password_message}
        </HelperText>
      ) : <BlankView Width={10}></BlankView>}
    </View>
  );
};

export default EmailPassword;
