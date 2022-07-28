import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

const PracticeHours = () => {
  const { t } = useTranslation();

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
        {t('practices.practiceHours')[0]}
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            -
          </ListItemIcon>
          <ListItemText>
            <Typography
              color='text.secondary'
            >
              {t('practices.practiceHours')[1]}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            -
          </ListItemIcon>
          <ListItemText>
            <Typography
              color='text.secondary'
            >
              {t('practices.practiceHours')[2]}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            -
          </ListItemIcon>
          <ListItemText>
            <Typography
              color='text.secondary'
            >
              {t('practices.practiceHours')[3]}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            -
          </ListItemIcon>
          <ListItemText>
            <Typography
              color='text.secondary'
            >
              {t('practices.practiceHours')[4]}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default PracticeHours;
