import { Container, Divider, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';

const EnrollmentHeader = () => {
  const { locale } = useRouter();
  const translation = locale === 'en' ? en : locale === 'fr' ? fr : locale === 'de' ? de : no;

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
        <Typography
          variant='h2'
          textAlign='center'
          fontWeight='bold'
          color='primary'
        >
          {translation.enrollment.header[0]}
        </Typography>
        <Divider />
        <Typography>
          {translation.enrollment.header[1]}
        </Typography>
      </Stack>
    </Container>
  );
}

export default EnrollmentHeader;