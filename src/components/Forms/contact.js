import React from 'react';
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="mx-auto max-w-md"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="visually-hidden">
        <label>
          Don’t fill this out: <input hidden name="bot-field" onChange={handleChange} />
        </label>
      </div>
      <div className="form-item form-text">
        <label>
          Name: 
        </label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div className="form-item form-text">
        <label>
          Email:
        </label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div className="form-item form-text">
        <label>
          Message: 
        </label>
        <textarea name="message" onChange={handleChange} />
      </div>
      <div className="form-actions">
        <button className="btn" type="submit">Send</button>
      </div>
    </form>
  )
}
