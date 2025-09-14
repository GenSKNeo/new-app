import { useState } from 'react';
import { Link } from "react-router-dom";
import './ControlledForm.css';

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(formErrors);
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <div className="success-message">
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully.</p>
          <Link to="/" className="back-link">Back to Users</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="controlled-form">
        <div className="form-group">
          <label htmlFor="name">Name: *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email: *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message: *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      
      <Link to="/" className="back-link">Back to Users</Link>
    </div>
  );
}

export default ControlledForm;