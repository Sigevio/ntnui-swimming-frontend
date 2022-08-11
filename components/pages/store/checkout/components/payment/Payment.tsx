import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './content/CheckoutForm';

type PaymentProps = {
  nextStep: () => void
}

const stripePromise = loadStripe('pk_test_4S689YmLDvfASO91mS8jUFT9');

const Payment = (props: PaymentProps) => {
  const { nextStep } = props;

  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pi_123_secret_123', // this is a random one
  };

  return (
    <Elements
      stripe={stripePromise}
      options={options}
    >
      <CheckoutForm
        nextStep={nextStep}
      />
    </Elements>
  );
}

export default Payment;
