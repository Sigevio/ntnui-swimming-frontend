import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import StoreHeader from '../components/pages/store/StoreHeader';
import StoreItems from '../components/pages/store/StoreItems';

const Store: NextPage = () => {
  return (
    <Layout>
      <StoreHeader />
      <StoreItems />
    </Layout>
  );
}

export default Store;
