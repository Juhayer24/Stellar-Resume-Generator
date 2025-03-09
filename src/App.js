import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login"; // Import the new Login component
import HomePage from "./components/HomePage";
import Template from "./components/Template";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Template3 from "./components/Template3";
import ViewResume from "./components/ViewResume";
import Signup from "./components/SignUp";
import "./App.css"; // Import your CSS

function App() {
  return (
    <Router>
      
        <Routes>
          {/* Define all your routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/template" element={<Template />} />
          <Route path="/template1" element={<Template1 />} />
          <Route path="/template2" element={<Template2 />} />
          <Route path="/template3" element={<Template3 />} />
          <Route path="/viewresume" element={<ViewResume />} />
        </Routes>
      
    </Router>
  );
}

export default App;
