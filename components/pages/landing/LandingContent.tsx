import { Container, Stack, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'next-export-i18n';

const LandingContent = () => {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '120vh'
      }}
    >
      <Fade
        duration={1000}
        triggerOnce
        direction='up'
        fraction={0.25}
      >
        <Stack
          gap='0.5rem'
        >
          <Typography
            variant='h2'
            color='text.primary'
          >
            {t('home.whoHeader')}
          </Typography>
          <Typography
            color='text.secondary'
          >
            {t('home.whoDescription')[0]}
          </Typography>
          <Typography
            color='text.secondary'
          >
            {t('home.whoDescription')[1]}
          </Typography>
        </Stack>
      </Fade>
    </Container>
  );
}

export default LandingContent;
