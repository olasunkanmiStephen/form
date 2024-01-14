// App.tsx
import React, { useState } from 'react';
import Profile from './Components/Profile';
import Regform from './Components/Regform';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState<string[]>([]); // Keep track of registered users
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profileImage: null,
  });

  const handleLogin = () => {
    // Check if the user is registered before setting isLoggedIn to true
    if (registeredUsers.includes(formData.email)) {
      setIsLoggedIn(true);
    } else {
      alert('User not registered. Please register first.');
    }
  };

  const handleRegister = (newUserData: any) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, newUserData.email]);
    alert('User registered successfully!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {isLoggedIn ? (
        <Profile formData={formData} />
      ) : (
        <div>
          <h1>Login</h1>
          <form>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
          <hr />
          <Regform onRegister={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default App;
