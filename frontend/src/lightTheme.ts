import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import breakpoints from './breakpoints';

const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#90ee90',
      main: '#70cc70',
      dark: '#43a047'
    },
    secondary: {
      light: '#757575',
      main: '#424242',
      dark: '#212121'
    },
    error: {
      main: red.A400
    },
    warning: {
      light: '#ffb74d',
      main: '#ffa726',
      dark: '#f57c00'
    },
    info: {
      main: '#9c27b0'
    },
    success: {
      main: '#43a047'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    },
    background: {
      default: '#f2f2f2',
      paper: '#ececec'
    },
    mode: 'light'
  },
  breakpoints: {
    ...breakpoints
  }
});

export default lightTheme;
