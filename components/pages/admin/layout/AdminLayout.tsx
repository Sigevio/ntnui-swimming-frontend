import { styled } from '@mui/material';
import { ReactNode, useState } from 'react';
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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // CHANGE TO FALSE FOR ADMIN LOGIN
  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  return (
    <>
      <NavBar isAdmin={isLoggedIn} />
      {isLoggedIn ?
        <>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </> :
        <AdminLogin loginFailed={loginFailed} />}
      <Footer />
    </>
  );
}

export default AdminLayout;