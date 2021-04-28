import React from 'react';
import './App.css';
import Home from './screens/Home';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffa4a2',
      main: '#e57373',
      dark: '#af4448',
      contrastText: '#212121',
    },
    secondary: {
      light: '#be9c91',
      main: '#8d6e63',
      dark: '#5f4339',
      contrastText: '#ffffff',
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App;
