import AdminLayout from '../../components/pages/admin/layout/AdminLayout';
import ProfileForm from '../../components/pages/admin/profile/ProfileForm';
import ProfileHeader from '../../components/pages/admin/profile/ProfileHeader';
import ProfileSignOut from '../../components/pages/admin/profile/ProfileSignOut';

const Profile = () => {
  return (
    <AdminLayout>
      <ProfileHeader />
      <ProfileForm />
      <ProfileSignOut />
    </AdminLayout>
  );
}

export default Profile;
