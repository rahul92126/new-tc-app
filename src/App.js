import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import truckImage from './assets/truck-on-highway.jpg';
import { FaGlobe } from 'react-icons/fa';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import GetStartedPage from './GetStartedPage';

function ForgotPasswordPage() {
  return (
    <div className="login-page-container">
      <h2>Forgot Password Page</h2>
      <p>Instructions to reset password will go here.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <h1>TruckCart</h1>
          </Link>
        </div>
        <nav className="nav">
          <div className="nav-dropdown">
            <button className="dropbtn">Overview</button>
            <div className="dropdown-content">
              <p className="description-text">TC is a B2B transport aggregator providing seamless logistics solutions for businesses across India.</p>
            </div>
          </div>
          <div className="nav-dropdown">
            <button className="dropbtn">Solutions</button>
            <div className="dropdown-content">
              <button>SMEs</button>
              <button>Enterprise</button>
              <button>Manufacturing Unit</button>
              <button>Traders</button>
              <button>Traders</button>
            </div>
          </div>
          <div className="nav-dropdown">
            <button className="dropbtn">Pricing</button>
            <div className="dropdown-content">
              <button>Flexible Plans</button>
              <button>Enterprise Plans</button>
            </div>
          </div>
          <div className="nav-dropdown">
            <button className="dropbtn">Customer support</button>
            <div className="dropdown-content">
              <button>FAQ</button>
              <button>Contact Us</button>
            </div>
          </div>
        </nav>
        <div className="auth-and-lang-buttons">
          <div className="lang-dropdown">
            <button className="dropbtn"><FaGlobe /> EN</button>
            <div className="dropdown-content">
              <button>हिंदी</button>
              <button>తెలుగు</button>
              <button>தமிழ்</button>
              <button>മലയാളം</button>
              <button>ಕನ್ನಡ</button>
            </div>
          </div>
          <Link to="/login" className="auth-btn">Log In</Link>
          <Link to="/get-started" className="auth-btn get-started">Get Started</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>

      <footer className="footer">
        <p>© 2025 TC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;