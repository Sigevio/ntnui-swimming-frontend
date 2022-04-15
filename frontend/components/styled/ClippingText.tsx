import { styled, Typography } from '@mui/material';

const ClippingText = styled(Typography)(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent'
}));

export default ClippingText;