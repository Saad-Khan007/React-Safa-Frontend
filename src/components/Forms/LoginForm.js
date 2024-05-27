import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context/Product';

export default function LoginForm() {
    const navigate = useNavigate();
    const { showToast, UserContext , setToken} = useContext(ProductContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            setErrors({});
            UserContext.login(formData).then((response) => {
                localStorage.setItem('safaToken', response.data.authToken);
                setToken(response.data.authToken);
                showToast('success', 'Login', 'Logged in successfully');
                navigate('/');
            }).catch((error) => {
                showToast('error', 'Login Failed', error.response.data.error);
            });
        } else {
            showToast('error', 'Login Failed', 'Please try again');
            setErrors(errors);
        }
    };

    const validateForm = (formData) => {
        const errors = {};
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


    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="header">
                    <h3>Login</h3>
                </div>
                <fieldset>
                    <legend>Form</legend>
                    <form onSubmit={handleSubmit} name="login-form">
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
                    <p>Don't have an account?<span onClick={() => navigate('/signup')}> Sign up</span></p>
                </fieldset>
            </div>
        </div>
    );
}
