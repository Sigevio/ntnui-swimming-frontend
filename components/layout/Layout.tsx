import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';

const ContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4rem',
  marginBottom: '6rem'
});

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar
        isAdmin={true} // CHANGE TO FALSE TO HIDE ADMIN NAV
      />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default Layout;