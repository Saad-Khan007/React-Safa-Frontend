import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context/Product';

export default function SignupForm() {
  const navigate = useNavigate();
  const { showToast, UserContext, setToken } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else {
      const password = formData.password;
      if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      } else if (!/[A-Z]/.test(password)) {
        errors.password = 'Password must contain at least one uppercase letter';
      } else if (!/[a-z]/.test(password)) {
        errors.password = 'Password must contain at least one lowercase letter';
      } else if (!/[0-9]/.test(password)) {
        errors.password = 'Password must contain at least one number';
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.password = 'Password must contain at least one special character';
      }
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      UserContext.signup(formData).then((response) => {
        localStorage.setItem('safaToken', response.data.authToken);
        setToken(response.data.authToken);
        showToast('success', 'Sign Up', formData['name'] + ' is signed up successfully');
        navigate('/');
      }).catch((error) => {
        console.log(error);
        showToast('error', 'Signup Failed', error.response.data.error);
      });
    } else {
      showToast('error', 'Form Submitted Failed', 'Please try again.');
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="header">
          <h3>Sign-up</h3>
        </div>
        <fieldset>
          <legend>Form</legend>
          <form name="submit-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name.."
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder="Your E-mail.."
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type="password"
              name="password"
              placeholder="Your Password.."
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <button type="submit" className="btn">Submit</button>
          </form>
          <p>Already have an account?<span onClick={() => navigate('/login')}> Log In</span></p>
        </fieldset>
      </div>
    </div>
  );
}
