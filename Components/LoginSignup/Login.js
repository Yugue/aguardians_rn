import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import EmailPassword from '../Common/EmailPassword';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <View style={{marginTop: 20}}>
      <EmailPassword
        Email={Email}
        setEmail={setEmail}
        Password={Password}
        setPassword={setPassword}
      />
      <Text style={{textAlign: 'center'}}>Forgot your password?</Text>
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={{
          width: 100,
          marginTop: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        Log in
      </Button>
    </View>
  );
};

export default Login;
