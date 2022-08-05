import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import LandingContent from '../components/pages/landing/LandingContent';
import LandingHeader from '../components/pages/landing/LandingHeader';
import LandingHero from '../components/pages/landing/LandingHero';

const Home: NextPage = () => {
  return (
    <Layout>
      <LandingHero />
      <LandingHeader />
      <LandingContent />
    </Layout>
  )
}

export default Home
