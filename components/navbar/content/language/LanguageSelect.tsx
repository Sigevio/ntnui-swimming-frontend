import { useMediaQuery, useTheme } from '@mui/material';
import CustomLanguageSelect from './content/CustomLanguageSelect';
import { DrawerAccordion, DrawerAccordionDetails, DrawerAccordionSummary } from '../styled/mobile/DrawerAccordion';
import DrawerButton from '../styled/mobile/DrawerButton';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';

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
            <LanguageSwitcher
              key={option.value}
              lang={option.value}
            >
              <DrawerButton>
                {option.label}
              </DrawerButton>
            </LanguageSwitcher>
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
