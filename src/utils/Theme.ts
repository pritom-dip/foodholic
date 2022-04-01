import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#000',
      secondary: '#837D7D'
    },
    success: {
      main: '#12C659'
    },
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#837D7D'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '36px',
      fontWeight: 700
    },
    h6: {
      fontSize: '18px',
      fontWeight: 500
    }
  }
});

export default theme;
