import { Box, Drawer, IconButton, Stack, styled } from '@mui/material';
import { useLanguageQuery } from 'next-export-i18n';
import Link from 'next/link';
import { prefix } from '../../../utils/prefix';
import Image from 'next/image';
import Navigation from './navigation/Navigation';
import LanguageSelect from './language/LanguageSelect';
import DarkModeButton from './darkMode/DarkModeButton';
import { Menu } from '@mui/icons-material';
import SignOutButton from './admin/SignOutButton';
import { useAuth } from '../../../utils/auth/AuthContext';

const LogoWrapper = styled(Box)({
  position: 'relative',
  width: '5.5rem',
  aspectRatio: '1024/415',
  cursor: 'pointer'
});

type MobileDrawerProps = {
  drawerOpen: boolean,
  handleCloseDrawer: () => void
}

type MobileNavigationProps = {
  handleOpenDrawer: () => void
}

const Logo = () => {
  const [query] = useLanguageQuery();

  return (
    <Link
      href={{ pathname: '/', query: query }}
      passHref
    >
      <LogoWrapper>
        <Image
          src={`${prefix}/ntnui-logo.png`}
          alt='ntnui-logo'
          layout='fill'
          priority
        />
      </LogoWrapper>
    </Link>
  );
}

const DesktopNavigation = () => {
  const { user } = useAuth();

  return (
    <>
      <Navigation />
      <Stack
        direction='row'
        alignItems='center'
        gap='1rem'
        position='absolute'
        right={user ? '0' : '2rem'}
        height='inherit'
      >
        <LanguageSelect />
        <DarkModeButton />
        <SignOutButton />
      </Stack>
    </>
  );
}

const MobileDrawer = (props: MobileDrawerProps) => {
  const { drawerOpen, handleCloseDrawer } = props;

  return (
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
          <Navigation />
        </Box>
        <Box>
          <LanguageSelect />
          <DarkModeButton />
          <SignOutButton />
        </Box>
      </Stack>
    </Drawer>
  );
}

const MobileNavigation = (props: MobileNavigationProps) => {
  const { handleOpenDrawer } = props;

  return (
    <IconButton
      sx={{
        position: 'fixed',
        right: '1rem'
      }}
      onClick={handleOpenDrawer}
    >
      <Menu />
    </IconButton>
  )
}

export {
  Logo,
  DesktopNavigation,
  MobileNavigation,
  MobileDrawer
}