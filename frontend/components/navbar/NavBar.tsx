import { Menu } from '@mui/icons-material';
import { AppBar, Box, Drawer, IconButton, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LanguageButton from './content/LanguageSelect';
import Nav from './content/Nav';
import DarkModeButton from './content/DarkModeButton';

const LogoWrapper = styled(Box)({
  position: 'relative',
  width: '5.5rem',
  aspectRatio: '1024/415',
  cursor: 'pointer'
});

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState<true | false>(false);
  const [navColor, setNavColor] = useState<string>('#ffffff00');
  const [textColor, setTextColor] = useState<string>('#fff');
  const [blur, setBlur] = useState<number>(0);
  
  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  const { pathname } = useRouter();

  useEffect(() => {
    if (window.scrollY <= 65) {
      setNavColor(`${theme.palette.background.paper}${(window.scrollY*3 | 0) <= 15 ? '0' : ''}${(window.scrollY*3 | 0).toString(16)}`);
    }
    else {
      setNavColor(`${theme.palette.background.paper}c3`);
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY <= 65) {
        setNavColor(`${theme.palette.background.paper}${(window.scrollY*3 | 0) <= 15 ? '0' : ''}${(window.scrollY*3 | 0).toString(16)}`);
      }
      else {
        setNavColor(`${theme.palette.background.paper}c3`);
      }
      if (window.scrollY <= 17) {
        setTextColor(`rgb(${255-window.scrollY*15}, ${255-window.scrollY*15}, ${255-window.scrollY*15})`);
      }
      else {
        setTextColor('#000');
      }
      if (window.scrollY <= 25) {
        setBlur(window.scrollY/100);
      }
      else {
        setBlur(0.25);
      }
    });
  }, [theme.palette.mode]);

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
        color={
          pathname === '/' ?
          theme.palette.mode === 'light' ?
          textColor :
          'text.primary' :
          'text.primary'
        }
      >
        <Link
          href='/'
          passHref
        >
          <LogoWrapper>
            <Image
              src='/ntnui-logo.png'
              alt='ntnui-logo'
              layout='fill'
            />
          </LogoWrapper>
        </Link>
        {mobileQuery ?
          <IconButton
            sx={{
              position: 'fixed',
              right: '1rem',
              color:
                pathname === '/' ?
                theme.palette.mode === 'light' ?
                textColor :
                'text.primary' :
                'text.primary'
            }}
            onClick={handleOpenDrawer}
          >
            <Menu />
          </IconButton> :
          <>
            <Nav />
            <Stack
              direction='row'
              alignItems='center'
              gap='1rem'
              position='absolute'
              right='1rem'
            >
              <LanguageButton />
              <DarkModeButton />
            </Stack>
          </>}
      </Stack>
      <Drawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        anchor='right'
      >
        <Stack
          width='70vw'
          height='100%'
          justifyContent='space-between'
          sx={{
            maxWidth: '20rem'
          }}
        >
          <Box>
            <Nav />
          </Box>
          <Box>
            <LanguageButton />
            <DarkModeButton />
          </Box>
        </Stack>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;