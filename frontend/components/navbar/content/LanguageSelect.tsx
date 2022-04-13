import { useRouter } from 'next/router';
import CustomLanguageSelect from './styled/CustomLanguageSelect';

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
  const { locale } = useRouter();

  return (
    <CustomLanguageSelect
      placeholder={options.filter(option => option.value === locale)[0].label}
      options={options.filter(option => option.value !== locale)}
    />
  );
}

export default LanguageButton;
