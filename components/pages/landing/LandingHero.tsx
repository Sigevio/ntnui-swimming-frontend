import { Fade, styled, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

const Hero = styled('div')(({ theme }) => ({
  backgroundImage: `linear-gradient(to top, ${theme.palette.background.default}, ${theme.palette.background.default}60, ${theme.palette.background.default}20, ${theme.palette.background.default}80, ${theme.palette.background.default}), url(hero.jpeg)`,
  width: '100vw',
  aspectRatio: '5120 / 3413',
  backgroundSize: 'cover',
  color: 'white',
  padding: '20px'
}));

const LandingHero = () => {
  const [showImage, setShowImage] = useState<false | true>(true);

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fade
      appear={false}
      in={showImage}
      timeout={2000}
    >
      <Hero
        sx={{
          marginTop: mobileQuery ? '0' : '6rem'
        }}
      />
    </Fade>
  );
}

export default LandingHero;
