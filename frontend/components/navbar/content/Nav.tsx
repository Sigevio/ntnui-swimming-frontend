import { Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, MouseEvent } from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';
import { NavButton, NavSelect } from './styled/NevElements';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const offersOpen = Boolean(anchorEl);

  const { locale } = useRouter();
  const translation = locale === 'no' ? no : en;

  const theme = useTheme();

  const handleOpenOffers = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseOffers = () => {
    setAnchorEl(null);
  };

  return (
    <>

      <NavSelect
        id='offers-button'
        disableRipple
        aria-controls={offersOpen ? 'offers-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={offersOpen ? 'true' : undefined}
        onClick={handleOpenOffers}
        onMouseOver={handleOpenOffers}
        sx={
          offersOpen ?
          {
            border: '#ffffff30 solid 1px',
            backgroundColor: theme.palette.action.hover
          } :
          null
        }
        startIcon={
        <KeyboardArrowRight
          sx={
            offersOpen ?
            {
              transform: 'rotate(90deg)',
              transition: 'transform 0.1s linear'
            } :
            {
              transition: 'transform 0.1s linear'
            }
          }
        />}
      >
        {translation.nav.offers}
      </NavSelect>
      <Menu
        id='offers-menu'
        anchorEl={anchorEl}
        open={offersOpen}
        onClose={handleCloseOffers}
      >
        <Link
          href='/practices'
          passHref
        >
          <MenuItem>
            {translation.nav.practices}
          </MenuItem>
        </Link>
        <Link
          href='/activities'
          passHref
        >
          <MenuItem>
            {translation.nav.activities}
          </MenuItem>
        </Link>
      </Menu>

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