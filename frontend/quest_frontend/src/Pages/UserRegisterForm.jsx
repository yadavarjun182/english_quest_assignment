import React, { useState } from 'react';
import '../components/styles/UserRegisterForm.css'; // Import your CSS file

const UserRegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Role:
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="CREATOR">CREATOR</option>
          <option value="VIEW_ALL">VIEW_ALL</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserRegisterForm;
