import { Facebook, GitHub, Instagram } from '@mui/icons-material';
import { Box, IconButton, IconButtonProps, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';

const SocialButton = styled(IconButton)(({ theme }) => ({
  transition: 'color 0.2s linear',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.action.hover
  }
}));

const Top = () => {
  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main'
      }}
      height='12rem'
      marginBottom='-12.125rem'
    >
      <Stack
        direction='row'
        height='inherit'
        alignItems='flex-end'
        justifyContent={mobileQuery ? 'flex-start' : 'center'}
        paddingBottom='1rem'
        paddingLeft='1rem'
        paddingRight='1rem'
      >
        <Link
          href='https://github.com/Sigevio/org.ntnu.svommer'
          passHref
        >
          <SocialButton>
            <GitHub />
          </SocialButton>
        </Link>
        <Link
          href='https://instagram.com/ntnuisvommegruppa/'
          passHref
        >
          <SocialButton>
            <Instagram />
          </SocialButton>
        </Link>
        <Link
          href='https://facebook.com/NTNUISvomming'
          passHref
        >
          <SocialButton>
            <Facebook />
          </SocialButton>
        </Link>
      </Stack>
      
    </Box>
  );
}

export default Top;