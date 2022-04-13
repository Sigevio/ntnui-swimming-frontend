import { styled, Typography } from '@mui/material';
import { fontWeight } from '@mui/system';

const NavText = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '0.875rem',
  lineHeight: '1.75',
  letterSpacing: '0.02857em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  userSelect: 'none',
  paddingInline: '0.45rem',
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: '0.25'
  }
}));

const NavSelectText = styled(Typography)({
  fontWeight: '500',
  fontSize: '0.875rem',
  lineHeight: '1.75',
  letterSpacing: '0.02857em',
  textTransform: 'uppercase',
  userSelect: 'none'
});

export {
  NavText,
  NavSelectText
};