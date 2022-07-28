import { Container, Typography } from '@mui/material';

const RecordsHeader = () => {
  return (
    <Container
      sx={{
        marginTop: '8rem'
      }}
    >
      <Typography
        textAlign='center'
        variant='h2'
        fontWeight='bold'
        color='primary'
      >
        Klubbrekorder
      </Typography>
    </Container>
  );
}

export default RecordsHeader;