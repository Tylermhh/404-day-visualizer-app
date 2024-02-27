import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Nav/Nav";
 
function Task() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>Task Page</p>
 
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
 
export default Task;