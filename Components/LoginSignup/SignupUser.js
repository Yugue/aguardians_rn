import React, {useState} from 'react';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Avatar, Text, TextInput, HelperText} from 'react-native-paper';
import EmailPassword from '../Common/EmailPassword';

const SignupUser = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [RePassword, setRePassword] = useState('');

  const onChangeRePassword = Password => setRePassword(Password);
  function passwordsMatch() {
    return Password === RePassword;
  }

  return (
    <View>
      <Avatar.Icon
        size={40}
        icon="image-plus"
        style={{alignSelf: 'center', marginTop: 20}}
      />
      <Text style={{alignSelf: 'center'}}>Click to add profile picture</Text>
      <EmailPassword
        Email={Email}
        setEmail={setEmail}
        Password={Password}
        setPassword={setPassword}
      />
      <TextInput
        mode="outlined"
        label="Re-Password"
        placeholder="Re-Password"
        value={RePassword}
        secureTextEntry={true}
        onChangeText={onChangeRePassword}
        style={{height: 40}}
      />
      <HelperText type="error" visible={true && passwordsMatch()}>
        Passwords do not match
      </HelperText>
    </View>
  );
};

export default SignupUser;
