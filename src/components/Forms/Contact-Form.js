import React from 'react'
import './Forms.css'

export default function ContactForm() {
  return (
    <div className="form-container">
      <div className="header">
        <h3>Contact Us</h3>
      </div>
      <fieldset>
        <legend>Form</legend>
        <form name="submit-to-google-sheet">
          <input type="text" placeholder="Your Name.." />
          <input type="email" placeholder="Your E-mail.." />
          <textarea rows="8" placeholder="Your Message.."></textarea>
          <button type="submit" className="btn">Submit</button>
        </form>
      </fieldset>
    </div>
  )
}
