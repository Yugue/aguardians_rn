import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Avatar,
  Text,
  TextInput,
  HelperText,
  Button,
  List,
} from 'react-native-paper';
import EmailPassword from './EmailPassword';
import DateTimePicker from '@react-native-community/datetimepicker';
import BlankView from '../BlankView';
import {Profile} from '../../../utils/types/Profile';
import auth from '@react-native-firebase/auth';

const SignupSection = ({userType}: {userType: string}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [RePassword, setRePassword] = useState('');

  const [profile, setProfile] = useState({} as Profile);
  const [showDatepicker, setshowDatepicker] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);

  const onChangeRePassword = (password: string) => setRePassword(password);
  function passwordsMatch(): boolean {
    return Password === RePassword;
  }

  const onChangeName = (changedName: string) => {
    setProfile({...profile, name: changedName});
  };
  const onChangedob = (event: Event, selectedDate?: Date | undefined) => {
    setshowDatepicker(false);
    if (selectedDate) {
      const string = selectedDate.toISOString();
      const dobArray = [
        string.slice(0, 4),
        string.slice(5, 7),
        string.slice(8, 10),
      ];
      setProfile({...profile, dob: dobArray});
    }
  };
  function validName(): boolean {
    const name_rule = /^[a-zA-Z0-9_-]([\sa-zA-Z0-9_-]){1,18}[a-zA-Z0-9_-]$/;
    return 'name' in profile ? name_rule.test(String(profile.name)) : false;
  }
  const name_message =
    "Name must be 3 to 20 alphanumerical characters. '-' '_' and space are allowed. Cannot start or end with a space.";
  const onChangePhone = (number: string) => {
    setProfile({...profile, phone: number});
  };
  function validPhoneNumber(): boolean {
    const phone_rule = new RegExp('^\\d+$');
    return 'phone' in profile ? phone_rule.test(String(profile.phone)) : false;
  }

  async function onSubmit() {
    setisSubmit(true);
    if (validName() && validPhoneNumber() && passwordsMatch()) {
      try {
        await auth().createUserWithEmailAndPassword(
          Email,
          Password,
        );
        console.log('User account created & signed in!');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      }
    }
  }

  return (
    <View>
      <Avatar.Icon
        size={40}
        icon="image-plus"
        style={{alignSelf: 'center', marginTop: 10}}
      />
      <Text style={{alignSelf: 'center', marginBottom: 10}}>
        Click to add profile picture
      </Text>
      <EmailPassword
        Email={Email}
        setEmail={setEmail}
        Password={Password}
        setPassword={setPassword}
        isSubmit={isSubmit}
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
      {isSubmit && !passwordsMatch() ? (
        <HelperText type="error" visible={true}>
          Passwords do not match
        </HelperText>
      ) : (
        <BlankView Width={10}></BlankView>
      )}

      <TextInput
        mode="outlined"
        label="Name"
        placeholder="Name"
        value={profile.name}
        onChangeText={onChangeName}
        style={{height: 40}}
      />
      {isSubmit && !validName() ? (
        <HelperText type="error" visible={true}>
          {name_message}
        </HelperText>
      ) : (
        <BlankView Width={10}></BlankView>
      )}

      <List.Item
        title="Date of Birth"
        description={'dob' in profile && profile.dob && profile.dob.join('-')}
        onPress={() => setshowDatepicker(true)}
        right={props => <List.Icon {...props} icon="pencil-plus-outline" />}
      />
      {showDatepicker && (
        <DateTimePicker
          value={new Date()}
          is24Hour={true}
          display="default"
          mode="date"
          onChange={onChangedob}
        />
      )}
      {isSubmit && !('dob' in profile && profile.dob) ? (
        <HelperText type="error" visible={true}>
          Please input a valid date of birth
        </HelperText>
      ) : (
        <BlankView Width={10}></BlankView>
      )}

      <TextInput
        mode="outlined"
        label="Phone Number"
        placeholder="Phone Number"
        value={profile.phone}
        keyboardType={'phone-pad'}
        onChangeText={onChangePhone}
        style={{height: 40}}
      />
      {isSubmit && !validPhoneNumber() ? (
        <HelperText type="error" visible={true}>
          Only 0 to 9's are allowed
        </HelperText>
      ) : (
        <BlankView Width={10}></BlankView>
      )}
      <Text style={{textAlign: 'center', marginVertical: 15}}>
        By creating an account, you agree to Aguardians Terms and Conditions
      </Text>

      <Button
        mode="contained"
        onPress={() => onSubmit}
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

export default SignupSection;
