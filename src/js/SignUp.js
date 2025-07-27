import React, { useState } from "react"; // Import useState
import '../css/general.css';
import '../css/signup.css';
import logo from "../components/images/logo.png"; // Correct logo import path

const Signup = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility

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

    // Toggle menu visibility using state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            {/* Header Section - Contains logo, title, and hamburger menu */}
            <header>
                {/* Logo Section - Placed inside header for correct positioning */}
                <a href="/">
                    <img src={logo} alt="Website Logo" className="logo" /> {/* Correct src path */}
                </a>

                {/* Hamburger Menu Button - Placed inside header for correct positioning */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    {/* Corrected class names for bars to match general.css */}
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* Navigation Menu - Conditionally rendered based on state */}
                {menuOpen && (
                    <nav id="navMenu" className="nav-menu"> {/* id can remain for potential external JS, but state is primary */}
                        <button onClick={() => window.location.href = '/'}>Home</button>
                        <button onClick={() => window.location.href = '/Login'}>Login</button>
                        <button onClick={() => window.location.href = '/Template'}>Select Template</button>
                    </nav>
                )}

                {/* Main Header Title and Description */}
                <div className="container"> {/* Container for header text */}
                    <h1>Sign Up for Stellar Resume</h1>
                    <p>Please enter your details to create an account.</p>
                </div>
            </header>

            {/* Signup Form */}
            <main className="signup-container"> {/* Use <main> for primary content */}
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

                <button className="back-btn" onClick={() => window.location.href = '/Login'}>Back to Login</button>
            </main>
        </div>
    );
};

export default Signup;
