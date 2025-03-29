import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Contact Me</h2>
        <div className="underline"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
            <p>Pune, Maharashtra, India</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>
              <a href="mailto:surajsonawane172@gmail.com">
                surajsonawane172@gmail.com
              </a>
            </p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>
            <h3>WhatsApp</h3>
            <p>
              <a href="https://wa.me/919860055304">
                +91 9860055304
              </a>
            </p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>
              <a href="https://github.com/Suraj051198" target="_blank" rel="noopener noreferrer">
                github.com/Suraj051198
              </a>
            </p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/sonawane-suraj/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/sonawane-suraj
              </a>
            </p>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3>Send Me a Message</h3>
          {formStatus.submitted ? (
            <div className="success-message">
              <p>Thank you for your message! I'll get back to you soon.</p>
              <button onClick={() => setFormStatus({ submitting: false, submitted: false, error: null })}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact; 