import React from 'react';
import { Link } from 'react-router-dom';
import LandingNav from "./Nav/LoginNav";
 
function Visualizer() {
  return (
    <div className="App">
      <LandingNav />
      <header className="App-header">
        <p>Visualizer Page</p>
 
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
 
export default Visualizer;