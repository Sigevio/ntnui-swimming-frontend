import Link from 'next/link';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';
import CustomRouteSelect from './styled/desktop/CustomRouteSelect';
import { NavText } from './styled/desktop/NavText';
import { useMediaQuery, useTheme } from '@mui/material';
import DrawerButton from './styled/mobile/DrawerButton';
import { DrawerAccordion, DrawerAccordionDetails, DrawerAccordionSummary } from './styled/mobile/DrawerAccordion';

const Nav = () => {
  const translation = en;

  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  const options = [
    {
      label: translation.nav.activities,
      value: 'activities'
    },
    {
      label: translation.nav.practices,
      value: 'practices'
    }
  ]

  return (
    <>
    
      {mobileQuery ?
      <DrawerAccordion>
        <DrawerAccordionSummary>
          <DrawerButton>
            {translation.nav.offers}
          </DrawerButton>
        </DrawerAccordionSummary>
        <DrawerAccordionDetails>
          <Link
            href='/activities'
            passHref
          >
            <DrawerButton>
              {translation.nav.activities}
            </DrawerButton>
          </Link>
          <Link
            href='/practices'
            passHref
          >
            <DrawerButton>
              {translation.nav.practices}
            </DrawerButton>
          </Link>
        </DrawerAccordionDetails>
      </DrawerAccordion> :
      <CustomRouteSelect
        placeholder={translation.nav.offers}
        options={options}
      />}

      <Link
        href='/enrollment'
        passHref
      >
        {mobileQuery ?
        <DrawerButton>
          {translation.nav.enrollment}
        </DrawerButton> :
        <NavText>
          {translation.nav.enrollment}
        </NavText>}
      </Link>

      <Link
        href='/board'
        passHref
      >
        {mobileQuery ?
        <DrawerButton>
          {translation.nav.board}
        </DrawerButton> :
        <NavText>
          {translation.nav.board}
        </NavText>}
      </Link>

      <Link
        href='/faq'
        passHref
      >
        {mobileQuery ?
        <DrawerButton>
          {translation.nav.faq}
        </DrawerButton> :
        <NavText>
          {translation.nav.faq}
        </NavText>}
      </Link>

      <Link
        href='/store'
        passHref
      >
        {mobileQuery ?
        <DrawerButton>
          {translation.nav.store}
        </DrawerButton> :
        <NavText>
          {translation.nav.store}
        </NavText>}
      </Link>

    </>
  );
}

export default Nav;