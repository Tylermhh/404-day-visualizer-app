import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage";
import Auth from "./components/AuthenticationPage"
import Home from "./components/HomePage";
import Task from "./components/TaskPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/task" element={<Task />} /> 
      </Routes>
    </Router>
  );
}

export default App;
