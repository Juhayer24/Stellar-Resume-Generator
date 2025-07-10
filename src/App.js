import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./js/Login";
import HomePage from "./js/HomePage";
import Template from "./js/Template";
import Template1 from "./js/Template1";
import Template2 from "./js/Template2";
import Template3 from "./js/Template3";
import ViewResume from "./js/ViewResume";
import Signup from "./js/SignUp";
import "./App.css";

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
