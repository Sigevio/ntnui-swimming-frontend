import { Box, Container, Stack, styled, useTheme } from '@mui/material';
import Image from 'next/image';

const ImageWrapper = styled(Box)({
  position: 'relative',
  height: '100%',
  width: '100%'
});

const Credits = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  opacity: '0.25',
  textDecoration: 'none',
  transition: 'opacity 0.25s ease-in-out',
  '&:hover': {
    opacity: '1'
  }
}));

const FourOhFourContent = () => {
  const theme = useTheme();

  return (
    <Stack
      height='100vh'
      width='100vw'
      marginBottom='-6rem'
      justifyContent='center'
      alignItems='center'
    >
      <Container
        sx={{
          width: 'min(100vw, 90vh)',
          aspectRatio: '1/1'
        }}
      >
        <ImageWrapper>
          <Image
            layout='fill'
            src={theme.palette.mode === 'dark' ? '404/dark-illustration.png' : '404/light-illustration.png'}
          />
        </ImageWrapper>
      </Container>
      <Credits href="https://storyset.com/web">Web illustration by Storyset</Credits>
    </Stack>
  );
}

export default FourOhFourContent;
