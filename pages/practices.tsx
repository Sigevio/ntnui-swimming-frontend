import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Lanes from '../components/pages/practices/Lanes';
import PracticeHours from '../components/pages/practices/PracticeHours';
import PracticesHeader from '../components/pages/practices/PracticesHeader';

const Practices: NextPage = () => {
  return (
    <Layout>
      <PracticesHeader />
      <PracticeHours />
      <Lanes />
    </Layout>
  );
}

export default Practices;