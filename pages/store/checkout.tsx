import { NextPage } from 'next';
import Layout from '../../components/layout/Layout';
import CheckoutContent from '../../components/pages/store/checkout/CheckoutContent';

const Checkout: NextPage = () => {
  return (
    <Layout>
      <CheckoutContent />
    </Layout>
  );
}

export default Checkout;
