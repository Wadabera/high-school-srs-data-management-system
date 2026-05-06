import { Link } from 'react-router-dom';
import { GraduationCap, Book, Shield, Zap, Mail, Phone, MapPin, ChevronRight, Users, Award } from 'lucide-react';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-wrapper">
      {/* Navigation */}
      <nav className="landing-nav animate-fade-in">
        <div className="landing-logo">
          <GraduationCap size={32} />
          <span>JIREN HIGH</span>
        </div>
        <div className="landing-nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <Link to="/login" className="btn-enter">System Login <ChevronRight size={18} /></Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content animate-slide-up">
          <span className="hero-badge">Excellence in Education</span>
          <h1>JIREN SECONDARY HIGH SCHOOL – JIMMA</h1>
          <p>Empowering the next generation of Ethiopian leaders with world-class education and modern digital management systems.</p>
          <div className="hero-btns">
            <Link to="/login" className="btn btn-primary btn-lg">Access Portal</Link>
            <a href="#about" className="btn btn-secondary btn-lg">Learn More</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in">
           <div className="hero-circle"></div>
           <div className="hero-card">
              <div className="card-inner">
                <Award size={40} color="var(--secondary)" />
                <h3>Nurturing Talent</h3>
                <p>Developing skills for a brighter future in Jimma.</p>
              </div>
           </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
         <div className="stat-item">
            <h2>2000+</h2>
            <p>Students</p>
         </div>
         <div className="stat-item">
            <h2>80+</h2>
            <p>Expert Teachers</p>
         </div>
         <div className="stat-item">
            <h2>Grades 9-12</h2>
            <p>Academic Range</p>
         </div>
         <div className="stat-item">
            <h2>100%</h2>
            <p>Digital Ready</p>
         </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Modern School Management</h2>
          <p>Our integrated digital system streamlines every aspect of the academic journey.</p>
        </div>
        <div className="features-grid-landing">
          <div className="feature-card-landing">
            <Shield size={40} />
            <h3>Secure Data</h3>
            <p>All student and teacher records are encrypted and securely stored.</p>
          </div>
          <div className="feature-card-landing">
            <Zap size={40} />
            <h3>Real-time Updates</h3>
            <p>Instant access to grades, attendance, and school announcements.</p>
          </div>
          <div className="feature-card-landing">
            <Book size={40} />
            <h3>Resource Center</h3>
            <p>Teachers can upload digital learning materials for students to access anytime.</p>
          </div>
          <div className="feature-card-landing">
            <Users size={40} />
            <h3>Unified Messaging</h3>
            <p>Direct communication channel between students, teachers, and administration.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
         <div className="about-text">
            <h2>About Jiren Secondary</h2>
            <p>Located in the heart of Jimma, Jiren Secondary High School has a long history of academic excellence. We believe in providing a holistic education that combines traditional values with modern technology.</p>
            <p>Our new digital registration system (SRS) is part of our commitment to transparency and efficiency in school administration.</p>
         </div>
         <div className="about-visual">
            <div className="img-placeholder">
               {/* In a real scenario, we'd use a high-quality photo of the school */}
               <GraduationCap size={120} opacity={0.1} />
            </div>
         </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-grid">
          <div className="contact-info-landing">
             <h2>Get in Touch</h2>
             <div className="info-item">
                <MapPin size={24} />
                <p>Jiren, Jimma, Oromia Region, Ethiopia</p>
             </div>
             <div className="info-item">
                <Phone size={24} />
                <p>+251 47 111 0000</p>
             </div>
             <div className="info-item">
                <Mail size={24} />
                <p>info@jirenhigh.edu.et</p>
             </div>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.4556487802!2d36.8286!3d7.6732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17ad0234a9466333%3A0x63359d95f850e9f8!2sJimma%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1714650000000!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '20px' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2026 Jiren Secondary High School Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
