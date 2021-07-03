import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import EmailPassword from '../Common/EmailPassword';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isSubmit, setisSubmit] = useState(false);

  return (
    <View style={{marginTop: 20}}>
      <EmailPassword
        Email={Email}
        setEmail={setEmail}
        Password={Password}
        setPassword={setPassword}
        isSubmit={isSubmit}
      />
      <Text style={{textAlign: 'center', marginTop: 20}}>Forgot your password?</Text>
      <Button
        mode="contained"
        onPress={() => setisSubmit(true)}
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
