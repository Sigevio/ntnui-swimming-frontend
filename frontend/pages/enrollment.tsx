import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import EnrollmentForm from '../components/pages/enrollment/EnrollmentForm';
import EnrollmentHeader from '../components/pages/enrollment/EnrollmentHeader';

const Enrollment: NextPage = () => {
  return (
    <Layout>
      <EnrollmentHeader />
      <EnrollmentForm />
    </Layout>
  )
}

export default Enrollment;
