import Link from 'next/link';
import CustomRouteSelect from './styled/desktop/CustomRouteSelect';
import { NavText } from './styled/desktop/NavText';
import { useMediaQuery, useTheme } from '@mui/material';
import DrawerButton from './styled/mobile/DrawerButton';
import { DrawerAccordion, DrawerAccordionDetails, DrawerAccordionSummary } from './styled/mobile/DrawerAccordion';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import AdminNav from './AdminNav';

const Nav = ({ isAdmin }: { isAdmin: boolean }) => {
  const { t } = useTranslation();
	const [query] = useLanguageQuery();

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  const offersOptions = [
    {
      label: t('nav.activities'),
      value: 'activities'
    },
    {
      label: t('nav.practices'),
      value: 'practices'
    }
  ]

  return (
    <>
    
      {mobileQuery ?
        <DrawerAccordion>
          <DrawerAccordionSummary>
            <DrawerButton>
              {t('nav.offers')}
            </DrawerButton>
          </DrawerAccordionSummary>
          <DrawerAccordionDetails>
            <Link
              href={{ pathname: '/activities', query: query }}
              passHref
            >
              <DrawerButton>
                {t('nav.activities')}
              </DrawerButton>
            </Link>
            <Link
              href={{ pathname: '/practices', query: query }}
              passHref
            >
              <DrawerButton>
                {t('nav.practices')}
              </DrawerButton>
            </Link>
          </DrawerAccordionDetails>
        </DrawerAccordion> :
        <CustomRouteSelect
          placeholder={t('nav.offers')}
          options={offersOptions}
        />}

      <Link
        href={{ pathname: '/enrollment', query: query }}
        passHref
      >
        {mobileQuery ?
          <DrawerButton>
            {t('nav.enrollment')}
          </DrawerButton> :
          <NavText>
            {t('nav.enrollment')}
          </NavText>}
      </Link>

      <Link
        href={{ pathname: '/board', query: query }}
        passHref
      >
        {mobileQuery ?
          <DrawerButton>
            {t('nav.board')}
          </DrawerButton> :
          <NavText>
            {t('nav.board')}
          </NavText>}
      </Link>

      <Link
        href={{ pathname: '/faq', query: query }}
        passHref
      >
        {mobileQuery ?
          <DrawerButton>
            {t('nav.faq')}
          </DrawerButton> :
          <NavText>
            {t('nav.faq')}
          </NavText>}
      </Link>

      <Link
        href={{ pathname: '/store', query: query }}
        passHref
      >
        {mobileQuery ?
          <DrawerButton>
            {t('nav.store')}
          </DrawerButton> :
          <NavText>
            {t('nav.store')}
          </NavText>}
      </Link>
      
      {isAdmin ?
        <AdminNav />:
        null}

    </>
  );
}

export default Nav;
