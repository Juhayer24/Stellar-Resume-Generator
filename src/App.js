import React from "react";
import RegisterForm from "./components/RegisterForm"; // Existing RegisterForm component
import Login from "./components/Login"; // Import the new Login component
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <Login /> {/* Adding the Login component */}
      <RegisterForm /> {/* Keeping the RegisterForm component */}
    </div>
  );
}

export default App;
