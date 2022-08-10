import { Button, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { useAuth } from '../../../../utils/auth/AuthContext';

const SignOutButton = () => {
  const { user, logout } = useAuth();

  const { t } = useTranslation();

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {user ?
        <Button
          variant='contained'
          disableElevation
          color='error'
          sx={{
            width: mobileQuery ? '100%' : '8rem',
            height: mobileQuery ? '4rem' : '100%',
            borderRadius: '0'
          }}
          onClick={logout}
        >
          {t('nav.signOut')}
        </Button> :
        null}
    </>
  );
}

export default SignOutButton;
