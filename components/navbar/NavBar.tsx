import { AppBar, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { DesktopNavigation, Logo, MobileDrawer, MobileNavigation } from './content/NavBarComponents';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [navColor, setNavColor] = useState<string>('#ffffff00');
  const [blur, setBlur] = useState<number>(0);
  
  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (window.scrollY <= 65) {
      setNavColor(`${theme.palette.background.paper}${(window.scrollY*3 | 0) <= 15 ? '0' : ''}${(window.scrollY*3 | 0).toString(16)}`);
    } else {
      setNavColor(`${theme.palette.background.paper}c3`);
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY <= 0) {
        setNavColor(`${theme.palette.background.paper}00`);
      } else if (window.scrollY <= 65) {
        setNavColor(`${theme.palette.background.paper}${(window.scrollY*3 | 0) <= 15 ? '0' : ''}${(window.scrollY*3 | 0).toString(16)}`);
      } else {
        setNavColor(`${theme.palette.background.paper}c3`);
      }
      if (window.scrollY <= 0) {
        setBlur(0);
      } else if (window.scrollY <= 25) {
        setBlur(window.scrollY/100);
      } else {
        setBlur(0.25);
      }
    });
  }, [theme.palette.background.paper]);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  }

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  }

  return (
    <AppBar
      elevation={navColor.slice(-2) === '00' ? 0 : 3}
      sx={{
        height: '3.5rem',
        paddingInline: '1rem',
        backgroundColor: navColor,
        backdropFilter:
          navColor.slice(-2) === '00' ?
          'none' :
          theme.palette.mode === 'dark' ?
          `brightness(0.75) blur(${blur}rem)` :
          `blur(${blur}rem)`
      }}
    >
      <Stack
        direction='row'
        gap='1.25rem'
        alignItems='center'
        height='inherit'
        color='text.primary'
      >
        <Logo />
        {mobileQuery ?
          <MobileNavigation
            handleOpenDrawer={handleOpenDrawer}
          /> :
          <DesktopNavigation />}
      </Stack>
      <MobileDrawer
        drawerOpen={drawerOpen}
        handleCloseDrawer={handleCloseDrawer}
      />
    </AppBar>
  );
}

export default NavBar;