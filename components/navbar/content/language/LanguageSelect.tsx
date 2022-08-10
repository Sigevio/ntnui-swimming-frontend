import { useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import CustomLanguageSelect from './content/CustomLanguageSelect';
import { DrawerAccordion, DrawerAccordionDetails, DrawerAccordionSummary } from '../styled/mobile/DrawerAccordion';
import DrawerButton from '../styled/mobile/DrawerButton';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

const options = [
  {
    label: 'Norsk',
    value: 'no'
  },
  {
    label: 'English',
    value: 'en'
  },
  /*{
    label: 'Français',
    value: 'fr'
  },
  {
    label: 'Deutsch',
    value: 'de'
  }*/
]

const LanguageSelect = () => {
  const { t } = useTranslation();
	const [query] = useLanguageQuery();

  const theme = useTheme();

  const mobileQuery = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {mobileQuery ?
      <DrawerAccordion>
        <DrawerAccordionSummary>
          <DrawerButton>
            {options.filter(option => option.value === t('language'))[0].label}
          </DrawerButton>
        </DrawerAccordionSummary>
        <DrawerAccordionDetails>
          {options.filter(option => option.value !== t('language')).map(option => (
            <Link
              key={option.value}
              href={{ pathname: t('/'), query: query }}
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
        placeholder={options.filter(option => option.value === t('language'))[0].label}
        options={options.filter(option => option.value !== t('language'))}
      />}
    </>
  );
}

export default LanguageSelect;
