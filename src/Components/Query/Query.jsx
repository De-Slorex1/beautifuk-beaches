import React, { useState } from 'react';
import '../Query/Query.css'

const Query = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Query submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
   
    <div id='query' className="query-container">
      <h2>Have a Query? Contact Us!</h2>
      <form onSubmit={handleSubmit} className="query-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <textarea
          name="message"
          placeholder="Type your message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    
  );
};

export default Query;
