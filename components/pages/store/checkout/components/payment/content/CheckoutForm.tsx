import { Button, Card, CardActions, CardContent, styled, useTheme } from '@mui/material';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { useTranslation } from 'next-export-i18n';
import { FormEvent } from 'react';

type CheckoutFormProps = {
  nextStep: () => void
}

const CardElementWrapper = styled('div')({
  border: '2px solid #ccc',
  borderRadius: '0.25rem',
  padding: '0.5rem'
});

const CheckoutForm = (props: CheckoutFormProps) => {
  const { nextStep } = props;

  const stripe = useStripe();
  const elements = useElements();

  const { t } = useTranslation();

  const theme = useTheme();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      }
    });


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <CardElementWrapper>
            <CardElement
              options = {{hidePostalCode: true, style: {
                base: {
                  color: theme.palette.text.secondary,
                  fontSize: '1.5rem'
                }
              }}}
            />
          </CardElementWrapper>
        </CardContent>
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
            disabled={!stripe}
          >
            {t('store.checkout.nextStep')}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default CheckoutForm;
