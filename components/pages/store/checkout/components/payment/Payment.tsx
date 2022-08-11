import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

type PaymentProps = {
  nextStep: () => void
}

const Payment = (props: PaymentProps) => {
  const { nextStep } = props;

  const { t } = useTranslation();

  return (
    <Card>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
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

export default Payment;
