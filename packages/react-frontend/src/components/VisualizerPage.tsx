import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav/Nav";
 
function Visualizer() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <p>Visualizer Page</p>
 
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
 
export default Visualizer;