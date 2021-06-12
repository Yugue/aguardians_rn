import React from 'react';
import { ThemeProvider, Button } from 'react-native-elements';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import theme from './Theme/theme';

// Your App
const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Button title="My B235utton" />
        <Button title="My 2nd Button" />
      </ThemeProvider>
    </SafeAreaView>
  );
};


export default App;
