import React from "react";
import Login from "./components/Login"; // Import the new Login component
import HomePage from "./components/HomePage";
import Template from "./components/Template";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Template3 from "./components/Template3";
import ViewResume from "./components/ViewResume";
import "./App.css";
import Signup from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <Login /> {/* Adding the Login component */}
      <HomePage />
      <Signup />
      <Template />
      <Template1 />
      <Template2 />
      <Template3 />
      <ViewResume />
    </div> // Fixed missing closing div
  );
}

export default App;
