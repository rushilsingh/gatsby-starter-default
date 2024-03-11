import React, { useState } from 'react';
import './ContactForm.css'; 

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message!");
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label className="form-label">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </label>
      <br />
      <label className="form-label">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </label>
      <br />
      <label className="form-label">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
        />
      </label>
      <br />
      <button type="submit" className="form-button">Send</button>
    </form>
  );
}

export default ContactForm;
