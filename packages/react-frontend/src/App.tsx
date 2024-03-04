import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage";
import Auth from "./components/AuthenticationPage"
import Home from "./components/HomePage";
import Task from "./components/TaskPage";
import Viz from "./components/VisualizerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="https://thankful-dune-0d41a831e.5.azurestaticapps.net/auth" element={<Auth />} /> 
        <Route path="https://thankful-dune-0d41a831e.5.azurestaticapps.net/home" element={<Home />} />
        <Route path="https://thankful-dune-0d41a831e.5.azurestaticapps.net/task" element={<Task />} />
        <Route path="https://thankful-dune-0d41a831e.5.azurestaticapps.net/visualize" element={<Viz />} /> 
      </Routes>
    </Router>
  );
}

export default App;
