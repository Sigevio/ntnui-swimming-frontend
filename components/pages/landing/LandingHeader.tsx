import { Box, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'next-export-i18n';

const LandingHeader = () => {
  const { t } = useTranslation();

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
          {t('home.header')}
        </Typography>
      </Fade>
      <Fade
        duration={1000}
        triggerOnce
        direction='down'
        delay={500}
      >
        <Typography
          textAlign='center'
          color='#fff'
          fontWeight='bold'
          fontSize='large'
          sx={{
            textShadow: '0 0 1rem #000'
          }}
        >
          {t('home.headerDescription')}
        </Typography>
      </Fade>
    </Box>
  );
}

export default LandingHeader;
