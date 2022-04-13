import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../../pages/_app';
import NavButton from './styled/NavButton';

const DarkModeButton = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {mobileQuery ?
      <NavButton
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'}
      </NavButton> :
      <IconButton
        color='info'
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>}
    </>
  );
}

export default DarkModeButton;