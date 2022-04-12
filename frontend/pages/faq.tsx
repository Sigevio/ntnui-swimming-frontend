import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import FAQHeader from '../components/pages/faq/FAQHeader';
import FAQs from '../components/pages/faq/FAQs';

const FAQ: NextPage = () => {
  return (
    <Layout>
      <FAQHeader />
      <FAQs />
    </Layout>
  )
}

export default FAQ
