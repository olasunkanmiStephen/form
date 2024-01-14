interface ProfileProps {
    formData: {
        firstName: string;
        lastName: string;
        email: string;
        profileImage: File | null;
      };
  }
  

  const Profile: React.FC<ProfileProps> = ({ formData }) => {
    return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h2>Profile</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        {formData.profileImage && (
          <div>
            <h3>Profile Image</h3>
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile"
              style={{ maxWidth: '200px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
