import { School } from '@mui/icons-material';
import { Container, Divider, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';

const Courses = () => {
  const { locale } = useRouter();
  const translation = locale === 'no' ? no : en;

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
        {translation.activities.courses[0]}
      </Typography>
      <Stack
        direction='row'
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
          orientation='vertical'
          sx={{
            height: '8rem'
          }}
        />
        <Typography>
          {translation.activities.courses[1]}
        </Typography>
      </Stack>
    </Container>
  );
}

export default Courses;
