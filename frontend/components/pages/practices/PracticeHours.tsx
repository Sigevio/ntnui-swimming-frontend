import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';

const PracticeHours = () => {
  const { locale } = useRouter();
  const translation = locale === 'no' ? no : en;

  return (
    <Box
      sx={{
        maxWidth: '50rem'
      }}
    >
      <Typography
        variant='h3'
        textAlign='center'
      >
        {translation.practices.practiceHours[0]}
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            -
          </ListItemIcon>
          <ListItemText>
            <Typography>
              {translation.practices.practiceHours[1]}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            -
          </ListItemIcon>
          <ListItemText>
            <Typography>
              {translation.practices.practiceHours[2]}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            -
          </ListItemIcon>
          <ListItemText>
            <Typography>
              {translation.practices.practiceHours[3]}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            -
          </ListItemIcon>
          <ListItemText>
            <Typography>
              {translation.practices.practiceHours[4]}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default PracticeHours;
