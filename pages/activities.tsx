import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import ActivitiesHeader from '../components/pages/activities/ActivitiesHeader';
import CabinTrip from '../components/pages/activities/CabinTrip';
import Camp from '../components/pages/activities/Camp';
import Courses from '../components/pages/activities/Courses';
import Games from '../components/pages/activities/Games';
import Judge from '../components/pages/activities/Judge';
import Meets from '../components/pages/activities/Meets';

const Activities: NextPage = () => {
  return (
    <Layout>
      <ActivitiesHeader />
      <Meets />
      <Games />
      <Courses />
      <CabinTrip />
      <Judge />
      <Camp />
    </Layout>
  );
}

export default Activities;