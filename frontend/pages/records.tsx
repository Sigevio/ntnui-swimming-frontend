import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import RecordsHeader from '../components/pages/records/RecordsHeader';
import RecordsTables from '../components/pages/records/RecordsTables';

const Records: NextPage = () => {
  return (
    <Layout>
      <RecordsHeader />
      <RecordsTables />
    </Layout>
  );
}

export default Records;