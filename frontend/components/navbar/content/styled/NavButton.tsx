import { Button, styled } from '@mui/material';

const NavButton = styled(Button)(({ theme }) => ({
  color: 'inherit',
  border: '#ffffff00 solid 1px',
  transition: 'none',
  '&:hover': {
    border: '#ffffff30 solid 1px',
    backgroundColor: theme.palette.action.hover
  },
  [theme.breakpoints.down('md')]: {
    height: '3.5rem',
    width: '100%'
  }
}));

export default NavButton;