import React, { useContext, useState } from 'react';
import './Forms.css';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context/Product';

export default function ContactForm() {
  const navigate = useNavigate();
  const { showToast } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setErrors({});
      showToast('success', 'Contact', formData.name + ' your contact form has been submitted we will reached you soon');
      navigate('/');
    } else {
      showToast('error', 'Contact', 'Please fill in the contact details and try again');
      setErrors(errors);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="header">
          <h3>Contact Us</h3>
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
            <textarea
              rows="8"
              name="message"
              placeholder="Your Message.."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
            <button type="submit" className="btn">Submit</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}
