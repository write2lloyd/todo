import React from 'react';
import './App.css';
import Home from './screens/Home';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#e8f5e9',
      dark: '#b6c2b7',
      contrastText: '#000000',
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
