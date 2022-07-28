import { School } from '@mui/icons-material';
import { Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

const Courses = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      sx={{
        marginBottom: '2rem'
      }}
    >
      <Typography
        variant='h3'
        textAlign='center'
        marginBottom='0.5rem'
      >
        {t('activities.courses')[0]}
      </Typography>
      <Stack
        direction={mobileQuery ? 'column-reverse' : 'row'}
        alignItems='center'
        gap='1rem'
      >
        <School
          color='primary'
          sx={{
            height: '8rem',
            width: '8rem'
          }}
        />
        <Divider
          orientation={mobileQuery ? 'horizontal' : 'vertical'}
          sx={
            mobileQuery ?
            {
              width: '95vw'
            } :
            {
              height: '8rem'
            }
          }
        />
        <Typography
          color='text.secondary'
        >
          {t('activities.courses')[1]}
        </Typography>
      </Stack>
    </Container>
  );
}

export default Courses;
