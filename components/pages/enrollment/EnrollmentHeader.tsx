import { Container, Divider, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { Fade } from 'react-awesome-reveal';

const EnrollmentHeader = () => {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        marginTop: '8rem'
      }}
    >
      <Stack
        gap='1rem'
        sx={{
          wordWrap: 'break-word'
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
            color='primary'
          >
            {t('enrollment.header')[0]}
          </Typography>
          <Divider />
        </Fade>
        <Fade
          duration={1000}
          triggerOnce
          delay={500}
        >
          <Typography
            color='text.secondary'
          >
            {t('enrollment.header')[1]}
          </Typography>
        </Fade>
      </Stack>
    </Container>
  );
}

export default EnrollmentHeader;
