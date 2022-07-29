import { styled } from '@mui/material';
import { useState } from 'react';
import Footer from '../../../footer/Footer';
import NavBar from '../../../navbar/NavBar';
import AdminLogin from './content/AdminLogin';
import AdminNav from './content/AdminNav';

const ContentWrapper = styled('div')({
  display: 'flex'
});

const AdminLayout: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  const handleLogin = ({ username, password }: { username: string, password: string }) => {
    if (username === 'username' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setLoginFailed(true);
    }
  };

  return (
    <>
      <NavBar />
      {isLoggedIn ?
        <>
          <ContentWrapper>
            <AdminNav />
            {children}
          </ContentWrapper>
          <Footer />
        </> :
        <AdminLogin handleChangeToParent={handleLogin} loginFailed={loginFailed} />}
    </>
  );
}

export default AdminLayout;