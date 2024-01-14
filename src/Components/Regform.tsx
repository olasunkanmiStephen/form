// Regform.tsx
import React, { useState } from 'react';

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface RegformProps {
  onRegister: (newUserData: any) => void;
}

const Regform: React.FC<RegformProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState<RegistrationData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3001/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          alert('User registered successfully!');
          onRegister();
        } else {
          const errorMessage = await response.text();
          alert(`Registration failed: ${errorMessage}`);
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for registration */}
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
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
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Regform;
