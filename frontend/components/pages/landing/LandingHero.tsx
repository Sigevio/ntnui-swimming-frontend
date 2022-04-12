import { Box, Fade, styled } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageHeight = styled(Box)({
  height: '60rem',
  width: '100vw'
});

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  filter: theme.palette.mode === 'dark' ? 'brightness(0.75)' : ''
}));

const LandingHero = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

  return (
    <Fade
      appear={false}
      in={showImage}
      timeout={3000}
    >
      <ImageHeight>
      <HeroWrapper>
        <Image
          src='/hero.jpeg'
          alt='hero'
          layout='fill'
          objectFit='cover'
          priority
        />
      </HeroWrapper>
      </ImageHeight>
    </Fade>
  );
}

export default LandingHero;