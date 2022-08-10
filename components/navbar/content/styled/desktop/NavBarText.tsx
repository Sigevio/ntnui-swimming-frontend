import { styled, Typography } from '@mui/material';

const NavText = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '0.875rem',
  lineHeight: '1.75',
  letterSpacing: '0.02857em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  userSelect: 'none',
  paddingInline: '0.45rem',
  color: theme.palette.text.secondary,
  transition: 'opacity 0.25s ease',
  '&:hover': {
    opacity: '0.25'
  }
}));

const NavSelectText = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '0.875rem',
  lineHeight: '1.75',
  letterSpacing: '0.02857em',
  textTransform: 'uppercase',
  color: theme.palette.text.secondary,
  userSelect: 'none'
}));

export {
  NavText,
  NavSelectText
};