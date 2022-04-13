import Link from 'next/link';
import { useRouter } from 'next/router';
import NavButton from './styled/NavButton';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import CustomRouteSelect from './styled/CustomRouteSelect';

const Nav = () => {
  const { locale } = useRouter();
  const translation = locale === 'no' ? no : en;

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
    
      <CustomRouteSelect
        placeholder={translation.nav.offers}
        options={options}
      />

      <Link
        href='/enrollment'
        passHref
      >
        <NavButton>
          {translation.nav.enrollment}
        </NavButton>
      </Link>

      <Link
        href='/board'
        passHref
      >
        <NavButton>
          {translation.nav.board}
        </NavButton>
      </Link>

      <Link
        href='/faq'
        passHref
      >
        <NavButton>
          {translation.nav.faq}
        </NavButton>
      </Link>

      <Link
        href='/store'
        passHref
      >
        <NavButton>
          {translation.nav.store}
        </NavButton>
      </Link>

    </>
  );
}

export default Nav;