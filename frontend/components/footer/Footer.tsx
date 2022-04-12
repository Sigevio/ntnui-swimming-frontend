import { Box } from '@mui/material';
import Bottom from './content/Bottom';
import Swimmer from './content/Swimmer';
import Top from './content/Top';

const Footer = () => {
  return (
    <Box
      overflow='hidden'
    >
      <Top />
      <Swimmer />
      <Bottom />
    </Box>
  );
}

export default Footer;