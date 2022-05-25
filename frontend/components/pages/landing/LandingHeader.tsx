import { Box, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';

const LandingHeader = () => {
  const { locale } = useRouter();
  const translation = locale === 'en' ? en : locale === 'fr' ? fr : locale === 'de' ? de : no;

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
      <Fade
        duration={1000}
        cascade
        triggerOnce
        direction='up'
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
      </Fade>
    </Box>
  );
}

export default LandingHeader;