import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { Provider as PaperProvider } from 'react-native-paper';
import { themeRNE } from './Theme/themeRNE';
import { themeRNP } from './Theme/themeRNP';

import AuthSection from './Components/LoginSignup/AuthSection';
import HeaderMain from './Components/Header/Header';

// Your App
const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={themeRNP}>
        <ThemeProvider theme={themeRNE}>
          <HeaderMain />
          <AuthSection />
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};


export default App;
