import { Stack } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { prefix } from '../../../utils/prefix';
import StoreItem from './content/StoreItem';

const items = [
  {
    id: 1,
    filetype: 'png',
    header: [
      'NTNUI Svømmming genser',
      'NTNUI Svømming Sweater'
    ],
    description: [
      'Skriv størrelse i kommentarfeltet',
      'Write size in comments'
    ],
    price: 510
  },
  {
    id: 2,
    filetype: 'png',
    header: [
      'NTNUI Svømming genser med glidelås',
      'NTNUI Svømming Sweater with ZIP'
    ],
    description: [
      'Skriv størrelse/kjønn i kommentarfeltet',
      'Write size/gender in comments'
    ],
    price: 550
  },
  {
    id: 3,
    filetype: 'jpeg',
    header: [
      '75-årsjubileum',
      '75 Years Jubilee'
    ],
    description: [
      'Vi ønsker venner, gamle og nåværende medlemmer velkommen til å bli med å feire NTNUI Svømming sine 75 år! Skriv eventuelle allergier eller preferanser i kommentarfeltet ved påmelding. Prisen inkluderer mat og dalje. Arrangementet ligger tilgjengelig på Facebook.',
      'We wish friends, old and current members welcome to celebrate NTNUI Svømming turning 75 years! Write eventual allergies or preferences in comments. The price includes food and dalje. You can find the event on Facebook.'
    ],
    price: 650
  },
  {
    id: 4,
    filetype: 'jpeg',
    header: [
      'Svenskebriller',
      'Swedish Goggles'
    ],
    description: [
      'Tilgjengelige farger: white/orange/green/red. Skriv i kommentarfeltet hvilken farge du vil ha.',
      'Available colors: white/orange/green/red. Write color in comments.'
    ],
    price: 30
  },
  {
    id: 5,
    filetype: 'jpeg',
    header: [
      'NTNUI-badehette',
      'NTNUI Swimcap'
    ],
    description: [
      'Den offisielle NTNUI-svømming badehetten, kommer i gul farge.',
      'The official NTNUI swimcap. It is yellow.'
    ],
    price: 110
  }
]

const StoreItems = () => {
  const { t } = useTranslation();

  const handleCheckout = () => {

  }

  return (
    <Stack
      minHeight='100vh'
    >
      <Stack
        width='95vw'
        maxWidth='50rem'
        gap='2rem'
      >
        {items.map((item, i) => (
          <StoreItem
            key={i}
            item={item}
            handleCheckout={handleCheckout}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default StoreItems;
