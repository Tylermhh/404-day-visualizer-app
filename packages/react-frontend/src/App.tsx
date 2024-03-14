import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Landing from "./components/LandingPage";
import Auth from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import Home from "./components/HomePage";
import Task from "./components/TaskPage";
import Viz from "./components/VisualizerPage";
import PrivateRoute from "./components/PrivateRoute"; // Ensure this is correctly imported

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth/login" element={<Auth />} />
          <Route path="/auth/signup" element={<SignUp />} />
          
          {/* Apply PrivateRoute to the /home route */}
          <Route 
            path="/home" 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } 
          />
          
          <Route 
            path="/task" 
            element={
              <PrivateRoute>
                <Task />
              </PrivateRoute>
            } 
          />
          
          <Route 
            path="/visualize" 
            element={
              <PrivateRoute>
                <Viz />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
