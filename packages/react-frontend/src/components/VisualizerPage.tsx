import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from "./Nav/MainNav";
 
function Visualizer() {
  return (
    <div className="App">
      <MainNav 
        page = { "Visualizer" }
      />
      <header className="App-header">
        <p>Visualizer Page</p>
 
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
 
export default Visualizer;