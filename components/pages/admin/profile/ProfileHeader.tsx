import { Stack, Divider, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { Fade } from 'react-awesome-reveal';

const ProfileHeader = () => {
  const { t } = useTranslation();

  return (
    <Stack
      marginTop='8rem'
      gap='1rem'
      alignItems='center'
    >
      <Fade
        duration={1000}
        triggerOnce
        cascade
        direction='up'
      >
        <Typography
          variant='h2'
          textAlign='center'
          fontWeight='bold'
          color='primary'
        >
          {t('admin.profile.header')}
        </Typography>
        <Divider
          sx={{
            width: '95vw',
            maxWidth: '50rem'
          }}
        />
      </Fade>
    </Stack>
  );
}

export default ProfileHeader;
