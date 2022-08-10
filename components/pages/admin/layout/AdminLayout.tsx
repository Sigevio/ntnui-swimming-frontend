import { styled } from '@mui/material';
import { ReactNode, useState } from 'react';
import { useAuth } from '../../../../utils/auth/AuthContext';
import Footer from '../../../footer/Footer';
import NavBar from '../../../navbar/NavBar';
import AdminLogin from './content/AdminLogin';

const ContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4rem',
  marginBottom: '6rem'
});

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      {user ?
        <>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </> :
        <AdminLogin />}
      <Footer />
    </>
  );
}

export default AdminLayout;