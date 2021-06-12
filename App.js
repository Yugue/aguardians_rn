import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, Header, colors } from 'react-native-elements';
import { theme } from './Theme/theme';

import AuthSection from './Components/LoginSignup/AuthSection';

// Your App
const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Header
          backgroundColor={theme.colors.black} 
          leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'Aguardians', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <AuthSection />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};


export default App;
