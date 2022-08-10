import { useMediaQuery, useTheme } from '@mui/material';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import AdminNav from '../admin/AdminNav';
import { useAuth } from '../../../../utils/auth/AuthContext';
import { DesktopOffers, MobileOffers, NavigationRoute } from './content/NavigationComponents';

const Navigation = () => {
  const { t } = useTranslation();
	const [query] = useLanguageQuery();

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  const { user } = useAuth();

  return (
    <>
    
      {mobileQuery ?
        <MobileOffers
          t={t}
          query={query}
        /> :
        <DesktopOffers
          t={t}
        />}

      <NavigationRoute
        pathname='/enrollment'
        query={query}
        mobileQuery={mobileQuery}
        text={t('nav.enrollment')}
      />

      <NavigationRoute
        pathname='/board'
        query={query}
        mobileQuery={mobileQuery}
        text={t('nav.board')}
      />

      <NavigationRoute
        pathname='/faq'
        query={query}
        mobileQuery={mobileQuery}
        text={t('nav.faq')}
      />

      <NavigationRoute
        pathname='/store'
        query={query}
        mobileQuery={mobileQuery}
        text={t('nav.store')}
      />
      
      {user ?
        <AdminNav />:
        null}

    </>
  );
}

export default Navigation;
