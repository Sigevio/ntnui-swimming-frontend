import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import FourOhFourContent from '../components/pages/fourOhFour/FourOhFourContent';

const FourOhFour: NextPage = () => {
  return (
    <Layout>
      <FourOhFourContent />
    </Layout>
  )
}

export default FourOhFour;
