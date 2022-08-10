import { Button } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { useAuth } from '../../../../utils/auth/AuthContext';

const ProfileSignOut = () => {
  const { t } = useTranslation();

  const { logout } = useAuth();

  const handleSignOut = () => {
    logout();
  }

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
      onClick={handleSignOut}
    >
      {t('admin.profile.signOutButton')}
    </Button>
  );
}

export default ProfileSignOut;
