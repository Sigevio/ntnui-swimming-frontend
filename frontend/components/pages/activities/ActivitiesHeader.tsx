import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';

const ActivitiesHeader = () => {
  const { locale } = useRouter();
  const translation = locale === 'no' ? no : en;

  return (
    <Container
      sx={{
        marginTop: '8rem'
      }}
    >
      <Typography
        variant='h2'
        textAlign='center'
        fontWeight='bold'
        color='primary'
      >
        {translation.activities.header[0]}
      </Typography>
      <Typography
        textAlign='center'
        marginBottom='2rem'
      >
        {translation.activities.header[1]}
      </Typography>
    </Container>
  );
}

export default ActivitiesHeader;
