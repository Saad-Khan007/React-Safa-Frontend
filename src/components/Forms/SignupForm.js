import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignupForm() {
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <div className="header">
        <h3>Sign-up</h3>
      </div>
      <fieldset>
        <legend>Form</legend>
        <form name="submit-to-google-sheet">
          <input type="text" placeholder="Your Name.." />
          <input type="email" placeholder="Your E-mail.." />
          <input type="password" placeholder="Your Password.." />
          <button type="submit" className="btn">Submit</button>
        </form>
        <p>Already have an account?<span onClick={() => navigate('/login')}> Log In</span></p>
      </fieldset>
    </div>
  )
}
