import { Container, Divider, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';

const FAQHeader = () => {
  const { locale } = useRouter();
  const translation = locale === 'no' ? no : en;

  return (
    <Container
      sx={{
        marginTop: '8rem'
      }}
    >
      <Stack
        gap='1rem'
        alignItems='center'
      >
        <Typography
          variant='h2'
          fontWeight='bold'
          color='primary'
        >
          {translation.faq.header}
        </Typography>
        <Divider
          sx={{
            width: '95vw',
            maxWidth: '50rem'
          }}
        />
      </Stack>
    </Container>
  );
}

export default FAQHeader;