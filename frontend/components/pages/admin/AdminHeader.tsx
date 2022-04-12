import { Container, Typography } from '@mui/material';

const AdminHeader = () => {
  return (
    <Container
      sx={{
        marginTop: '8rem'
      }}
    >
      <Typography
        variant='h2'
        textAlign='center'
        fontWeight='bold'
        color='primary'
      >
        Admin
      </Typography>
    </Container>
  );
}

export default AdminHeader;