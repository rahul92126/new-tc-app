import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-form-box">
        <h2>Log In to Your Account</h2>
        <form>
          <div className="input-group">
            <label htmlFor="userId">User ID</label>
            <input type="text" id="userId" placeholder="Enter your user ID" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default LoginPage;