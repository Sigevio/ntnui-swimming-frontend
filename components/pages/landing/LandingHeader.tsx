import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'next-export-i18n';

const LandingHeader = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: mobileQuery ? 'relative' : 'absolute',
        top: mobileQuery ? '1rem' : '6rem',
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
          fontWeight='bold'
          fontSize='large'
          color='text.secondary'
        >
          {t('home.headerDescription')}
        </Typography>
      </Fade>
    </Box>
  );
}

export default LandingHeader;
