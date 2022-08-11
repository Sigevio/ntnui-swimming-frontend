import { Stack } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import StoreItem from './content/StoreItem';
import { items } from './items';

const StoreItems = () => {
  const { t } = useTranslation();

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
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default StoreItems;
