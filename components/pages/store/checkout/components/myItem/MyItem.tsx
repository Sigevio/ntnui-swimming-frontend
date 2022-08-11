import { Button, Card, CardActions, CardContent, CardHeader, styled, TextField, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { ItemProps } from '../../../content/content/StoreItemComponents';

type MyItemProps = {
  item: ItemProps,
  nextStep: () => void
}

const TextFieldWrapper = styled('div')({
  width: '100%',
  maxWidth: '30rem'
});

const MyItem = (props: MyItemProps) => {
  const { item, nextStep } = props;

  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader
        title={item.header[0]}
      />
      <CardContent>
        <Typography
          color='text.secondary'
        >
          {item.description[0]}
        </Typography>
        <Typography>

        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '1rem'
        }}
      >
        <TextFieldWrapper>
          <TextField
            label={t('store.checkout.myItem.comment')}
            fullWidth
            multiline
            rows={3}
          />
        </TextFieldWrapper>
        <Button
          variant='contained'
          onClick={nextStep}
          sx={{
            color: 'text.secondary'
          }}
        >
          {t('store.checkout.nextStep')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default MyItem;
