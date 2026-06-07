import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Mail, Lock, User, ChevronRight, AlertCircle, ArrowLeft } from 'lucide-react';
import api from '../api/axios';
import './Login.css';

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    phone: '',
    stream: '',
    grade: '',
    class: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const registerData = {
        fullname: formData.fullname,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        ...(formData.role === 'student' && {
          phone: formData.phone,
          stream: formData.stream,
          grade: formData.grade,
          class: formData.class,
        }),
      };
      
      await api.post('/auth/register', registerData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left animate-fade-in">
        <div className="brand-section">
          <div className="logo-icon">
            <GraduationCap size={48} />
          </div>
          <h1>Join SRS</h1>
          <p>Create your account to access the school management system.</p>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <span>Track Performance</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📚</div>
              <span>Access Resources</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <span>Stay Connected</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="login-right">
        <Link to="/login" className="back-link">
          <ArrowLeft size={16} /> Back to Login
        </Link>
        
        <div className="login-form-box animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="form-header">
            <h2>Create Account</h2>
            <p>Fill in the details below to register</p>
          </div>
          
          {error && (
            <div className="error-alert">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-with-icon">
                <User className="input-icon" size={18} />
                <input 
                  type="text" 
                  name="fullname"
                  className="form-control" 
                  placeholder="Enter your full name" 
                  value={formData.fullname}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Username</label>
                <div className="input-with-icon">
                  <User className="input-icon" size={18} />
                  <input 
                    type="text" 
                    name="username"
                    className="form-control" 
                    placeholder="Choose a username" 
                    value={formData.username}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Role</label>
                <select 
                  name="role"
                  className="form-control"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="director">Director</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-with-icon">
                <Mail className="input-icon" size={18} />
                <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-with-icon">
                  <Lock className="input-icon" size={18} />
                  <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    placeholder="Create password (min 8 chars)" 
                    value={formData.password}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <div className="input-with-icon">
                  <Lock className="input-icon" size={18} />
                  <input 
                    type="password" 
                    name="confirmPassword"
                    className="form-control" 
                    placeholder="Confirm password" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
            </div>

            {formData.role === 'student' && (
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-control" 
                    placeholder="Phone number" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Stream</label>
                  <select 
                    name="stream"
                    className="form-control"
                    value={formData.stream}
                    onChange={handleChange}
                  >
                    <option value="">Select Stream</option>
                    <option value="Natural">Natural</option>
                    <option value="Social">Social</option>
                  </select>
                </div>
              </div>
            )}

            {formData.role === 'student' && (
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Grade</label>
                  <select 
                    name="grade"
                    className="form-control"
                    value={formData.grade}
                    onChange={handleChange}
                  >
                    <option value="">Select Grade</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Class</label>
                  <input 
                    type="text" 
                    name="class"
                    className="form-control" 
                    placeholder="Section (A, B, C)" 
                    value={formData.class}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            
            <button type="submit" className="btn btn-primary btn-submit" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Register'}
            </button>
          </form>
          
          <div className="login-footer">
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}