import { useState } from 'react';
import { Link } from "react-router-dom";
import './ControlledForm.css';

function ControlledForm({ isProfileForm = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'Male',
    phone: '',
    address: '',
    department: '',
    position: '',
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

    if (formData.age && (formData.age < 1 || formData.age > 120)) {
      newErrors.age = 'Age must be between 1 and 120';
    }

    if (isProfileForm) {
      if (!formData.department.trim()) {
        newErrors.department = 'Department is required';
      }
      if (!formData.position.trim()) {
        newErrors.position = 'Position is required';
      }
    }

    if (!isProfileForm && !formData.message.trim()) {
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
      // In a real app, you would send this data to a server here
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          age: '',
          gender: 'Male',
          phone: '',
          address: '',
          department: '',
          position: '',
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
          <p>Your {isProfileForm ? 'profile has been submitted' : 'message has been sent'} successfully.</p>
          <Link to="/" className="back-link">Back to Profiles</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>{isProfileForm ? 'Add New Profile' : 'Contact Us'}</h2>
      
      <form onSubmit={handleSubmit} className="controlled-form">
        <div className="form-row">
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
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="120"
              className={errors.age ? 'error' : ''}
            />
            {errors.age && <span className="error-text">{errors.age}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        
        {isProfileForm && (
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="department">Department: *</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={errors.department ? 'error' : ''}
              />
              {errors.department && <span className="error-text">{errors.department}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="position">Position: *</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={errors.position ? 'error' : ''}
              />
              {errors.position && <span className="error-text">{errors.position}</span>}
            </div>
          </div>
        )}
        
        {!isProfileForm && (
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
        )}
        
        <button type="submit" className="submit-button">
          {isProfileForm ? 'Add Profile' : 'Send Message'}
        </button>
      </form>
      
      <Link to="/" className="back-link">Back to Profiles</Link>
    </div>
  );
}

export default ControlledForm;