import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';

const LandingHeader = () => {
  const { locale } = useRouter();
  const translation = locale === 'no' ? no : en;

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '7rem',
        width: '95vw',
        maxWidth: '60rem',
        zIndex: '1'
      }}
    >

        <Typography
          variant='h2'
          textAlign='center'
          fontWeight='bold'
          color='#fff'
          sx={{
            textShadow: '0 0 1rem #000'
          }}
        >
          {translation.home.header}
        </Typography>
        <Typography
          textAlign='center'
          color='#fff'
          fontWeight='bold'
          fontSize='large'
          sx={{
            textShadow: '0 0 1rem #000'
          }}
        >
          {translation.home.headerDescription}
        </Typography>

    </Box>
  );
}

export default LandingHeader;