import React from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="max-w-md mx-auto">
        <div className="form-item form-text">
          <label>
            Name: 
          </label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </div>
        <div className="form-item form-text">
          <label>
            Email:
          </label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className="form-item form-text">
          <label>
            Message: 
          </label>
          <textarea name="message" value={message} onChange={this.handleChange} />
        </div>
        <div className="form-actions">
          <button className="btn" type="submit">Send</button>
        </div>
      </form>
    );
  }
}


export default Contact;
