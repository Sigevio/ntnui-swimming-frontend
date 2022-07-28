import { Container, Divider, Stack, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'next-export-i18n';

const ActivitiesHeader = () => {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        marginTop: '8rem'
      }}
    >
      <Stack
        gap='1rem'
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
            color='primary'
          >
            {t('activities.header')[0]}
          </Typography>
          <Divider />
        </Fade>
        <Fade
          duration={1000}
          triggerOnce
          delay={500}
        >
          <Typography
            textAlign='center'
            marginBottom='2rem'
            color='text.secondary'
          >
            {t('activities.header')[1]}
          </Typography>
        </Fade>
      </Stack>
    </Container>
  );
}

export default ActivitiesHeader;
