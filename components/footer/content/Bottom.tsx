import { Box, Stack, Typography } from '@mui/material';

const Bottom = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark'
      }}
      height='4rem'
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        height='inherit'
      >
        <Typography>
          © 2022 NTNUI
        </Typography>
      </Stack>
    </Box>
  );
}

export default Bottom;