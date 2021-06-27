import { DefaultTheme } from 'react-native-paper';

export const themeRNP = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3E3E3E',
    accent: '#C4C4C4',
  },
  TextInput: {
    height: 40
  }
};


  