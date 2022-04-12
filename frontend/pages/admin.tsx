import { NextPage } from "next";
import AdminHeader from "../components/pages/admin/AdminHeader";
import AdminLayout from "../components/pages/admin/layout/AdminLayout";

const Admin: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
    </AdminLayout>
  );
}

export default Admin;