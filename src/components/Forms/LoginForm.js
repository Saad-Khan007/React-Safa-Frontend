import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    return (
        <div className="form-container">
            <div className="header">
                <h3>Login</h3>
            </div>
            <fieldset>
                <legend>Form</legend>
                <form name="submit-to-google-sheet">
                    <input type="email" placeholder="Your E-mail.." />
                    <input type="password" placeholder="Your Password.." />
                    <button type="submit" className="btn">Submit</button>
                </form>
                <p>Don't have an account?<span onClick={() => navigate('/signup')}> Sign up</span></p>
            </fieldset>
        </div>
    )
}
