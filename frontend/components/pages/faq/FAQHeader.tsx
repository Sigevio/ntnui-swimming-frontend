import { Container, Divider, Stack, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';


const FAQHeader = () => {
  const translation = en;

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
        <Fade
          duration={1000}
          cascade
          triggerOnce
          direction='down'
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
        </Fade>
      </Stack>
    </Container>
  );
}

export default FAQHeader;