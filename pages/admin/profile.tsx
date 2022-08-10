import AdminLayout from '../../components/pages/admin/layout/AdminLayout';
import ProfileForm from '../../components/pages/admin/profile/ProfileForm';
import ProfileHeader from '../../components/pages/admin/profile/ProfileHeader';

const Profile = () => {
  return (
    <AdminLayout>
      <ProfileHeader />
      <ProfileForm />
    </AdminLayout>
  );
}

export default Profile;
