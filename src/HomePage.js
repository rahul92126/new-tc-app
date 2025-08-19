import React from 'react';
import truckImage from './assets/truck-on-highway.jpg';

function HomePage() {
  return (
    <main className="login-page-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>TruckCart for your business</h1>
          <p>TC for Business gives your organization more control, deeper insights, and features built for enterprise users. Manage and track business transport on one dashboard.</p>
          <div className="cta-buttons">
            <button className="primary-btn">How to get started</button>
            <button className="secondary-btn">Check out our solutions</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={truckImage} alt="Transportation truck on a highway" />
        </div>
      </section>
      <section className="global-platform-section">
        <div className="platform-content">
          <p>A B2B platform built on India's largest transport network</p>
        </div>
      </section>
      <section className="solutions-section">
        <h2>Solutions that meet your business needs</h2>
        <div className="solutions-grid">
          <div className="solution-card">
            <h3>Ease of finding tarnsport services</h3>
            <p>Transport your goods with ease.</p>
          </div>
          <div className="solution-card">
            <h3>Explore various options</h3>
            <p>Eliminate single vendor agreements and explore various transport options in the perimeter </p>
          </div>
          <div className="solution-card">
            <h3>Countless benfits & Protection</h3>
            <p>Get a good price quotation by not compromising with the services and an added insurance protection for your goods.</p>
          </div>
        </div>
      </section>
      <section className="features-section">
        <h2>Designed for what your business needs</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="path/to/icon1.svg" alt="Icon 1" />
            <h3>Feature Title 1</h3>
            <p>Description of a key feature for your business. Explain how it solves a problem or adds value.</p>
          </div>
          <div className="feature-card">
            <img src="path/to/icon2.svg" alt="Icon 2" />
            <h3>Feature Title 2</h3>
            <p>Description of another key feature, highlighting its benefits and purpose.</p>
          </div>
          <div className="feature-card">
            <img src="path/to/icon3.svg" alt="Icon 3" />
            <h3>Feature Title 3</h3>
            <p>Description of a third feature that makes your service unique and valuable to clients.</p>
          </div>
        </div>
      </section>
      <section className="why-tc-section">
        <h2>Why businesses choose TC</h2>
        <div className="benefits-container">
          <div className="benefit-card">
            <div className="benefit-content">
              <h3>Simplified transport booking</h3>
              <p>Manage all your business travel on one platform.</p>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-content">
              <h3>Full control of your expenses</h3>
              <p>Set spending limits and keep track of all transport costs in real-time.</p>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-content">
              <h3>Dedicated customer support</h3>
              <p>Get 24/7 support from a team of experts ready to help you.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>Sign up in minutes and start managing your business transport today.</p>
          <button className="primary-btn">Sign up now</button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;