import { useMediaQuery, useTheme } from '@mui/material';
import { useLanguageQuery, useTranslation } from 'next-export-i18n';
import Link from 'next/link';
import CustomRouteSelect from '../navigation/content/CustomRouteSelect';
import { DrawerAccordion, DrawerAccordionDetails, DrawerAccordionSummary } from '../styled/mobile/DrawerAccordion';
import DrawerButton from '../styled/mobile/DrawerButton';

const AdminNav = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  const adminOptions = [
    {
      label: t('admin.nav.profile'),
      value: 'admin/profile'
    },
    {
      label: t('admin.nav.users'),
      value: 'admin/users'
    },
    {
      label: t('admin.nav.members'),
      value: 'admin/members'
    },
    {
      label: t('admin.nav.store'),
      value: 'admin/store'
    }
  ]

  return (
    <>
      {mobileQuery ?
        <DrawerAccordion>
          <DrawerAccordionSummary>
            <DrawerButton>
              Admin
            </DrawerButton>
          </DrawerAccordionSummary>
          <DrawerAccordionDetails>
            {adminOptions.map((option, i) => (
              <Link
                key={option.value}
                href={{ pathname: `/${option.value}`, query: query }}
                passHref
              >
                <DrawerButton>
                  {t(`admin.nav.${option.value.slice(6)}`)}
                </DrawerButton>
              </Link>
            ))}
          </DrawerAccordionDetails>
        </DrawerAccordion> :
        <CustomRouteSelect
          placeholder='Admin'
          options={adminOptions}
        />}
    </>
  );
}

export default AdminNav;
