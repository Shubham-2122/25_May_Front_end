import React from 'react'
import Nav from '../Coman/Nav'
import Footer from '../Coman/Footer'

function Account() {
    return (
        <>
        <Nav />
            <section className="auth-page">
                <div className="auth-wrapper">
                    {/* =========================
       LEFT SIDE
  ========================== */}
                    <div className="auth-image">
                        <div className="image-bottom-badge">
                            <i className="fa-solid fa-star" />
                            Premium Furniture
                        </div>
                        <div className="auth-image-content">
                            <a href="./index.html" className="brand-logo-log-in">
                                <span className="brand-icon">
                                    <i className="fa-solid fa-couch" />
                                </span>
                                FURNIMATE
                            </a>
                            <div className="small-title">
                                Welcome Home
                            </div>
                            <h1>
                                Make Your Space
                                Feel Like Home.
                            </h1>
                            <p>
                                Discover beautiful furniture crafted for modern
                                living. Sign in to manage your orders, wishlist
                                and personalized shopping experience.
                            </p>
                        </div>
                    </div>
                    {/* =========================
       RIGHT FORM
  ========================== */}
                    <div className="auth-form-area">
                        {/* Mobile Logo */}
                        <div className="mobile-logo">
                            <span className="mobile-logo-icon">
                                <i className="fa-solid fa-couch" />
                            </span>
                            FURNIMATE
                        </div>
                        <div className="form-top">
                            <div className="welcome-text">
                                Welcome back 👋
                            </div>
                            <h2 className="form-title" id="formTitle">
                                Sign in to your account
                            </h2>
                            <p className="form-subtitle" id="formSubtitle">
                                Enter your details below to continue shopping.
                            </p>
                        </div>
                        {/* =========================
           LOGIN / SIGNUP TABS
      ========================== */}
                        <div className="auth-tabs">
                            <button className="auth-tab active" id="loginTab" onclick="showLogin()">
                                LOGIN
                            </button>
                            <button className="auth-tab" id="signupTab" onclick="showSignup()">
                                SIGN UP
                            </button>
                        </div>
                        {/* =========================
           LOGIN FORM
      ========================== */}
                        <div className="form-panel" id="loginForm">
                            <form onsubmit="loginUser(event)">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="form-label">
                                        Email Address
                                    </label>
                                    <div className="input-wrapper">
                                        <i className="fa-regular fa-envelope" />
                                        <input type="email" className="form-control-custom" placeholder="Enter your email" required />
                                    </div>
                                </div>
                                {/* Password */}
                                <div className="form-group">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <div className="input-wrapper">
                                        <i className="fa-solid fa-lock" />
                                        <input type="password" className="form-control-custom password-input" id="loginPassword" placeholder="Enter your password" required />
                                        <button type="button" className="password-toggle" onclick="togglePassword('loginPassword', this)">
                                            <i className="fa-regular fa-eye" />
                                        </button>
                                    </div>
                                </div>
                                {/* Options */}
                                <div className="form-options">
                                    <label className="remember-box">
                                        <input type="checkbox" />
                                        Remember me
                                    </label>
                                    <a href="./forgot-password.html" className="forgot-link">
                                        Forgot Password?
                                    </a>
                                </div>
                                {/* Login Button */}
                                <button type="submit" className="main-btn">
                                    SIGN IN
                                    <i className="fa-solid fa-arrow-right ms-2" />
                                </button>
                            </form>
                            {/* Divider */}
                            <div className="divider">
                                OR CONTINUE WITH
                            </div>
                            {/* Social */}
                            <div className="social-buttons">
                                <button className="social-btn" type="button" onclick="socialLogin('Google')">
                                    <i className="fa-brands fa-google google-icon" />
                                    Google
                                </button>
                                <button className="social-btn" type="button" onclick="socialLogin('Facebook')">
                                    <i className="fa-brands fa-facebook facebook-icon" />
                                    Facebook
                                </button>
                            </div>
                            <div className="bottom-text">
                                Don't have an account?
                                <button onclick="showSignup()">
                                    Create Account
                                </button>
                            </div>
                        </div>
                        {/* =========================
           SIGNUP FORM
      ========================== */}
                        <div className="form-panel" id="signupForm" style={{ display: 'none' }}>
                            <form onsubmit="signupUser(event)">
                                {/* Name */}
                                <div className="form-group">
                                    <label className="form-label">
                                        Full Name
                                    </label>
                                    <div className="input-wrapper">
                                        <i className="fa-regular fa-user" />
                                        <input type="text" className="form-control-custom" placeholder="Enter your full name" required />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="form-group">
                                    <label className="form-label">
                                        Email Address
                                    </label>
                                    <div className="input-wrapper">
                                        <i className="fa-regular fa-envelope" />
                                        <input type="email" className="form-control-custom" placeholder="Enter your email" required />
                                    </div>
                                </div>
                                {/* Password */}
                                <div className="form-group">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <div className="input-wrapper">
                                        <i className="fa-solid fa-lock" />
                                        <input type="password" className="form-control-custom" id="signupPassword" placeholder="Create password" minLength={6} required />
                                        <button type="button" className="password-toggle" onclick="togglePassword('signupPassword', this)">
                                            <i className="fa-regular fa-eye" />
                                        </button>
                                    </div>
                                </div>
                                {/* Confirm Password */}
                                <div className="form-group">
                                    <label className="form-label">
                                        Confirm Password
                                    </label>
                                    <div className="input-wrapper">
                                        <i className="fa-solid fa-lock" />
                                        <input type="password" className="form-control-custom" id="confirmPassword" placeholder="Confirm your password" required />
                                    </div>
                                </div>
                                {/* Terms */}
                                <div className="terms">
                                    <label className="remember-box">
                                        <input type="checkbox" required />
                                        <span>
                                            I agree to the
                                            <a href="#">Terms &amp; Conditions</a>
                                            and
                                            <a href="#">Privacy Policy</a>.
                                        </span>
                                    </label>
                                </div>
                                {/* Signup */}
                                <button type="submit" className="main-btn">
                                    CREATE ACCOUNT
                                    <i className="fa-solid fa-arrow-right ms-2" />
                                </button>
                            </form>
                            {/* Divider */}
                            <div className="divider">
                                OR SIGN UP WITH
                            </div>
                            <div className="social-buttons">
                                <button className="social-btn" type="button" onclick="socialLogin('Google')">
                                    <i className="fa-brands fa-google google-icon" />
                                    Google
                                </button>
                                <button className="social-btn" type="button" onclick="socialLogin('Facebook')">
                                    <i className="fa-brands fa-facebook facebook-icon" />
                                    Facebook
                                </button>
                            </div>
                            <div className="bottom-text">
                                Already have an account?
                                <button onclick="showLogin()">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
        </>
    )
}

export default Account
