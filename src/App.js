import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from '../src/pageComponents/Home/home.js';

const theme = createTheme({
  shape: {
    pillRadius: 50,
  },
  palette: {
    primary: { main: '#F4D800' },
    secondary: {
      main: '#050707',
    },
    error: { main: '#ffd700' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
