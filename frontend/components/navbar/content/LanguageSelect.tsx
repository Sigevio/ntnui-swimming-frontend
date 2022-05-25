import { useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomLanguageSelect from './styled/desktop/CustomLanguageSelect';
import { DrawerAccordion, DrawerAccordionDetails, DrawerAccordionSummary } from './styled/mobile/DrawerAccordion';
import DrawerButton from './styled/mobile/DrawerButton';

const options = [
  {
    label: 'Norsk',
    value: 'no'
  },
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Français',
    value: 'fr'
  },
  {
    label: 'Deutsch',
    value: 'de'
  }
]

const LanguageButton = () => {
  const { locale, asPath } = useRouter();

  const theme = useTheme();

  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {mobileQuery ?
      <DrawerAccordion>
        <DrawerAccordionSummary>
          <DrawerButton>
            {options.filter(option => option.value === locale)[0].label}
          </DrawerButton>
        </DrawerAccordionSummary>
        <DrawerAccordionDetails>
          {options.filter(option => option.value !== locale).map(option => (
            <Link
              key={option.value}
              href={asPath}
              locale={option.value}
              passHref
            >
              <DrawerButton>
                {option.label}
              </DrawerButton>
            </Link>
          ))}
        </DrawerAccordionDetails>
      </DrawerAccordion> :
      <CustomLanguageSelect
        placeholder={options.filter(option => option.value === locale)[0].label}
        options={options.filter(option => option.value !== locale)}
      />}
    </>
  );
}

export default LanguageButton;
