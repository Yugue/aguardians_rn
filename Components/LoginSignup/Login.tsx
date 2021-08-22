import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import EmailPassword from '../Common/LoginSignup/EmailPassword';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isSubmit, setisSubmit] = useState(false);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View style={{marginTop: 20}}>
        <EmailPassword
          Email={Email}
          setEmail={setEmail}
          Password={Password}
          setPassword={setPassword}
          isSubmit={isSubmit}
        />
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Forgot your password?
        </Text>
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
  }
  else {
    console.log("user signed in");
  }
};

export default Login;
