import { styled } from "@mui/material";
import Footer from "../../../footer/Footer";
import NavBar from "../../../navbar/NavBar";
import AdminNav from "./content/AdminNav";

const ContentWrapper = styled('div')({
  display: 'flex'
});

const AdminLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <AdminNav />
        {children}
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default AdminLayout;