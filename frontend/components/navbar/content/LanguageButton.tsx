import { Menu, MenuItem, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useState, MouseEvent } from 'react';
import { NavSelect } from './styled/NevElements';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';

const LanguageButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const languagesOpen = Boolean(anchorEl);

  const { locale, asPath } = useRouter();
  const translation = locale === 'no' ? no : en;
  const theme = useTheme();

  const handleOpenLanguages = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLanguages = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <NavSelect
        id='languages-button'
        disableRipple
        aria-controls={languagesOpen ? 'languages-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={languagesOpen ? 'true' : undefined}
        onClick={handleOpenLanguages}
        onMouseOver={handleOpenLanguages}
        onMouseOut={handleCloseLanguages}
        startIcon={
        <KeyboardArrowRight
          sx={
            languagesOpen ?
            {
              transform: 'rotate(90deg)',
              transition: 'transform 0.1s linear'
            } :
            {
              transition: 'transform 0.1s linear'
            }
          }
        />}
        sx={
          languagesOpen ?
          {
            width: '6.5rem',
            border: '#ffffff30 solid 1px',
            backgroundColor: theme.palette.action.hover
          } :
          {
            width: '6.5rem'
          }
        }
      >
        {translation === no ? en.nav.language : no.nav.language}
      </NavSelect>
      <Menu
        id='languages-menu'
        anchorEl={anchorEl}
        open={languagesOpen}
        onClose={handleCloseLanguages}
      >
        <Link
          href={asPath}
          locale='en'
          passHref
        >
          <MenuItem
            onClick={handleCloseLanguages}
          >
            {no.nav.language}
          </MenuItem>
        </Link>
        <Link
          href={asPath}
          locale='no'
          passHref
        >
          <MenuItem
            onClick={handleCloseLanguages}
          >
            {en.nav.language}
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}

export default LanguageButton;
