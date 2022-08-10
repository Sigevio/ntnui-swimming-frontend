import Link from "next/link";
import CustomRouteSelect from "./CustomRouteSelect";
import { NavText } from "../../styled/desktop/NavBarText";
import { DrawerAccordion, DrawerAccordionDetails, DrawerAccordionSummary } from "../../styled/mobile/DrawerAccordion";
import DrawerButton from "../../styled/mobile/DrawerButton";

type NavigationRouteType = {
  pathname: string,
  query: string,
  mobileQuery: boolean,
  text: string
}

type MobileOffersType = {
  t: any,
  query: string
}

type DesktopOffersProps = {
  t: any
}

const NavigationRoute = (props: NavigationRouteType) => {
  const { pathname, query, mobileQuery, text } = props;

  return (
    <Link
      href={{ pathname: pathname, query: query }}
      passHref
    >
      {mobileQuery ?
        <DrawerButton>
          {text}
        </DrawerButton> :
        <NavText>
          {text}
        </NavText>}
    </Link>
  );
}

const MobileOffers = (props: MobileOffersType) => {
  const { t, query } = props;

  return (
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
    </DrawerAccordion>
  );
}

const DesktopOffers = (props: DesktopOffersProps) => {
  const { t } = props;

  const options = [
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
    <CustomRouteSelect
      placeholder={t('nav.offers')}
      options={options}
    />
  );
}

export {
  NavigationRoute,
  MobileOffers,
  DesktopOffers
}