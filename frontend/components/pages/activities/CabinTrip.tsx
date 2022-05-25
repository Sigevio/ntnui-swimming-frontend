import { Cabin } from '@mui/icons-material';
import { Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';

const CabinTrip = () => {
  const translation = en;

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
        {translation.activities.cabin[0]}
      </Typography>
      <Stack
        direction={mobileQuery ? 'column' : 'row'}
        alignItems='center'
        gap='1rem'
      >
        <Typography>
          {translation.activities.cabin[1]}
        </Typography>
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
        <Cabin
          color='primary'
          sx={{
            height: '8rem',
            width: '8rem'
          }}
        />
      </Stack>
    </Container>
  );
}

export default CabinTrip;
