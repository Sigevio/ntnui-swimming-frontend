import { Pool } from '@mui/icons-material';
import { Stack, useTheme } from '@mui/material';

const Swimmer = () => {
  const theme = useTheme();

  return (
    <Stack
      direction='row'
      justifyContent='right'
      marginBottom='-7.9375rem'
    >
      <Pool
        sx={{
          height: '20rem',
          width: '20rem',
          color: 'primary.dark'
        }}
      />
    </Stack>
  );
}

export default Swimmer;