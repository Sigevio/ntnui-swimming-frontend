import { Container, Divider, Stack, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';

const BoardHeader = () => {
  const translation = en;

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
            {translation.board.header[0]}
          </Typography>
          <Divider />
        </Fade>
        <Fade
          duration={1000}
          cascade
          triggerOnce
          direction='up'
          delay={1000}
        >
          <Typography>
            {translation.board.header[1]}
          </Typography>
          <Typography>
            {translation.board.header[2]}
          </Typography>
        </Fade>
      </Stack>
    </Container>
  );
}

export default BoardHeader;