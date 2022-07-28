import { AccessibleForward, DirectionsRun, DirectionsWalk } from '@mui/icons-material';
import { Container, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

const Lanes = () => {
  const { t } = useTranslation();

  return (
    <Container>

      <Stack
        gap='2.5rem'
      >
        <Stack
          gap='0.5rem'
        >
          <Typography
            variant='h3'
            textAlign='center'
          >
            {t('practices.lanes')[0]}
          </Typography>
          <Typography
            color='text.secondary'
          >
            {t('practices.lanes')[1]}
          </Typography>
        </Stack>

        <Stack
          gap='0.5rem'
        >
          <Stack
            direction='row'
            gap='0.5rem'
            alignItems='center'
          >
            <Typography
              variant='h4'
              textAlign='center'
            >
              {t('practices.lanes')[2]}
            </Typography>
            <AccessibleForward />
          </Stack>
          <Typography
            marginLeft='2rem'
            color='text.secondary'
          >
            {t('practices.lanes')[3]}
          </Typography>
        </Stack>

        <Stack
          gap='0.5rem'
        >
          <Stack
            direction='row'
            gap='0.5rem'
            alignItems='center'
          >
            <Typography
              variant='h4'
              textAlign='center'
            >
              {t('practices.lanes')[4]}
            </Typography>
            <DirectionsWalk />
          </Stack>
          <Typography
            marginLeft='2rem'
            color='text.secondary'
          >
            {t('practices.lanes')[5]}
          </Typography>
        </Stack>

        <Stack
          gap='0.5rem'
        >
          <Stack
            direction='row'
            gap='0.5rem'
            alignItems='center'
          >
            <Typography
              variant='h4'
            >
              {t('practices.lanes')[6]}
            </Typography>
            <DirectionsRun />
          </Stack>
          <Typography
            marginLeft='2rem'
            color='text.secondary'
          >
            {t('practices.lanes')[7]}
          </Typography>
        </Stack>

        <Typography
          marginTop='2.5rem'
          textAlign='center'
        >
          {t('practices.choice')}
        </Typography>
      </Stack>
      
    </Container>
  );
}

export default Lanes;
