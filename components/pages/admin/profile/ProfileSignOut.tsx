import { Button } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

const ProfileSignOut = () => {
  const { t } = useTranslation();

  return (
    <Button
      variant='contained'
      color='error'
      sx={{
        height: '3rem',
        width: '20rem',
        maxWidth: '90vw',
        marginTop: '2rem'
      }}
    >
      {t('admin.profile.signOutButton')}
    </Button>
  );
}

export default ProfileSignOut;
