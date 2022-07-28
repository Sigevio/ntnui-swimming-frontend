import { KeyboardArrowUp } from '@mui/icons-material';
import { Fab, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';

const AutoScroll = () => {
  const [revealFab, setRevealFab] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setRevealFab(true);
      }
      else {
        setRevealFab(false);
      }
    });
  }, []);
  
  return (
    <Zoom
      appear={false}
      in={revealFab}
    >
      <Fab
        disableRipple
        size='medium'
        onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}
        sx={{
          position: 'fixed',
          right: '2.5rem',
          bottom: '2.5rem',
          backgroundColor: '#fff'
        }}
      >
        <KeyboardArrowUp
          sx={{
            color: '#424242'
          }}
        />
      </Fab>
    </Zoom>
  );
}

export default AutoScroll;