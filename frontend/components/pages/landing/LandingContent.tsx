import { Container, Stack, Typography } from '@mui/material';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';

const LandingContent = () => {
  const translation = en;

  return (
    <Container
      sx={{
        minHeight: '16rem'
      }}
    >
      <Stack
        gap='0.5rem'
      >
        <Typography
          variant='h2'
          color='text.primary'
        >
          {translation.home.whoHeader}
        </Typography>
        <Typography
          color='text.secondary'
        >
          {translation.home.whoDescription[0]}
        </Typography>
        <Typography
          color='text.secondary'
        >
          {translation.home.whoDescription[1]}
        </Typography>
      </Stack>
    </Container>
  );
}

export default LandingContent;