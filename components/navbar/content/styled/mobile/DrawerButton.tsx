import { Button, styled } from '@mui/material';

const DrawerButton = styled(Button)(({ theme }) => ({
  color: 'inherit',
  height: '3.5rem',
  width: '100%',
  border: 'none',
  borderRadius: '0',
  '&:hover': {
    border: 'none',
    backgroundColor: theme.palette.action.hover
  }
}));

export default DrawerButton;