import { Check, Close } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CircularProgress, Dialog, DialogContent, DialogContentText, Stack, styled, TextField, Typography, useTheme } from '@mui/material';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { useTranslation } from 'next-export-i18n';
import { FormEvent, useState } from 'react';

type CheckoutFormProps = {
  nextStep: () => void,
  sendPaymentError: () => void
}

const CardElementWrapper = styled('div')(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[400],
  borderRadius: '0.25rem',
  padding: '0.5rem',
  maxHeight: '2.75rem'
}));

const PaymentDialogContent = styled(DialogContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
  alignItems: 'center',
  width: '95vw',
  height: '95vh',
  maxWidth: '30rem',
  maxHeight: '20rem'
});

const CheckoutForm = (props: CheckoutFormProps) => {
  const { nextStep, sendPaymentError } = props;

  const testing = true;

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isPaymentError, setIsPaymentError] = useState<boolean | null>(null);

  const [isReadyToPay, setIsReadyToPay] = useState<boolean>(false);

  const stripe = useStripe();
  const elements = useElements();

  const { t } = useTranslation();

  const theme = useTheme();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (testing) {
      let error = false; // set to true to test failed payment
      setIsDialogOpen(true);

      if (!stripe || !elements) {
        return;
      }

      // comment this function to proceed test payment as it will load forever
      /*const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        }
      });*/

      handleCloseDialog(error);
    } else {
      let error = true;
      setIsDialogOpen(true);

      if (!stripe || !elements) {
        return;
      }

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        }
      });

      if (result.error) {
        console.log(result.error.message);
        error = true;
        handleCloseDialog(error);
      } else {
        handleCloseDialog(error);
      }
    }
  }

  const handleCloseDialog = (error: boolean) => {
    setIsPaymentError(error);
    setTimeout(() => {
      setIsDialogOpen(false);
      if (!error) {
        nextStep();
      } else {
        sendPaymentError();
      }
    }, 4000);
  }

  if (!isDialogOpen && isPaymentError) {
    return (
      <Card>
        <CardContent>
          <Typography>
            Noe gikk galt. Vennligst ta kontakt med noen på blablabla@mail.org
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent>
            <Stack
              gap='1rem'
            >
              <CardElementWrapper>
                <CardElement
                  options = {{hidePostalCode: true, style: {
                    base: {
                      color: theme.palette.text.secondary,
                      fontSize: '1.5rem'
                    }
                  }}}
                  onChange={e => setIsReadyToPay(e.complete)}
                />
              </CardElementWrapper>
              <TextField
                name='name'
                type='text'
                label={t('store.checkout.payment.name')}
              />
              <TextField
                name='phone'
                type='tel'
                label={t('store.checkout.payment.phone')}
              />
              <TextField
                name='email'
                type='email'
                label={t('store.checkout.payment.email')}
              />
            </Stack>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button
              variant='contained'
              type='submit'
              sx={{
                color: 'text.secondary'
              }}
              disabled={!testing && (!stripe || !isReadyToPay)}
            >
              {t('store.checkout.payment.pay')}
            </Button>
          </CardActions>
        </Card>
      </form>

      <Dialog
        open={isDialogOpen}
      >
        <PaymentDialogContent>

          {isPaymentError !== null ?
            (
              <>
                <DialogContentText
                  variant='h4'
                >
                  {t(`store.checkout.payment.${isPaymentError ? 'fail' : 'success'}`)}
                </DialogContentText>
                {isPaymentError ?
                <Close
                  fontSize='large'
                  color='error'
                /> :
                <Check
                  fontSize='large'
                  color='success'
                />}
              </>
            ) : (
              <>
                <DialogContentText
                  variant='h4'
                >
                  {t('store.checkout.payment.performPayment')}
                </DialogContentText>
                <CircularProgress />
              </>
            )
          }

        </PaymentDialogContent>
      </Dialog>
    </>
  );
}

export default CheckoutForm;
