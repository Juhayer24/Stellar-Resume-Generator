import React from "react";
import './general.css';
import './signup.css';

const Signup = () => {
    // Function to handle form submission (example)
    const registerUser = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("User Registered:", { firstName, lastName, email, password });
        // You can add your form submission logic here, e.g., API request
    };
    const toggleMenu = () => {
        const navMenu = document.getElementById('navMenu');
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    };

    return (
        <div>
            {/* Hamburger Menu Button */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Hidden Navigation Menu */}
            <nav id="navMenu" className="nav-menu">
                <button onClick={() => window.location.href = 'home.html'}>Home</button>
                <button onClick={() => window.location.href = 'login.html'}>Login</button>
                <button onClick={() => window.location.href = 'template.html'}>Select Template</button>
            </nav>

            <header>
                <div className="container">
                    <h1>Sign Up for Stellar Resume</h1>
                    <p>Please enter your details to create an account.</p>
                </div>
            </header>

            {/* Logo */}
            <a href="/">
                <img src="../images/logo.png" alt="Website Logo" className="logo" />
            </a>

            <div className="signup-container">
                <h2>Sign Up</h2>
                <form id="signupForm" onSubmit={registerUser}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Sign Up</button>
                </form>

                <button className="back-btn" onClick={() => window.location.href = 'login.html'}>Back to Login</button>
            </div>
        </div>
    );
};

export default Signup;
