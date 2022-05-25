import { Container, Divider, Stack, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';

const PracticesHeader = () => {
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
      >
        <Fade
          duration={1000}
          cascade
          triggerOnce
          direction='down'
        >
          <Typography
            variant='h2'
            textAlign='center'
            fontWeight='bold'
            color='primary'
          >
            {translation.practices.header[0]}
          </Typography>
          <Divider />
        </Fade>
        <Fade
          duration={1000}
          triggerOnce
          delay={1000}
        >
          <Typography
            textAlign='center'
            marginBottom='2rem'
          >
            {translation.practices.header[1]}
          </Typography>
        </Fade>
      </Stack>
    </Container>
  );
}

export default PracticesHeader;