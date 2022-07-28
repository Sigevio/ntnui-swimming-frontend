import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import breakpoints from './breakpoints';

const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#70cc70',
      main: '#43a047',
      dark: '#1b5e20'
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
      main: '#e4d00a'
    },
    success: {
      main: '#43a047'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    },
    background: {
      default: '#212121',
      paper: '#232323'
    },
    mode: 'dark'
  },
  breakpoints: {
    ...breakpoints
  }
});

export default darkTheme;
