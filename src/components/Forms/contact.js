import React from 'react';

const Contact = () => {

  return (
    <form className="max-w-md mx-auto" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-item form-text">
        <label>
          Name: 
        </label>
        <input type="text" name="name" />
      </div>
      <div className="form-item form-text">
        <label>
          Email:
        </label>
        <input type="email" name="email" />
      </div>
      <div className="form-item form-text">
        <label>
          Message: 
        </label>
        <textarea name="message" />
      </div>
      <div className="form-actions">
        <button className="btn" type="submit">Send</button>
      </div>
    </form>
  )

};

export default Contact;
