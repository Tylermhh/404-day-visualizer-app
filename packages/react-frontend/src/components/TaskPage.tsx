import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Nav/Nav";

import { CompletedTasks } from "./../types/types"; 


let tempTasks: CompletedTasks[] = [
  { item_name: "Make Frontend", description: "Add pie chart", start_date:  new Date("2024-01-16"), complete_date:  new Date("2024-01-21"), category: "Academics", time_spent: "7hrs"},
  { item_name: "Make Frontend", description: "Add pie chart", start_date:  new Date("2024-01-16"), complete_date:  new Date("2024-01-21"), category: "Academics", time_spent: "7hrs"},
  { item_name: "Make Frontend", description: "Add pie chart", start_date:  new Date("2024-01-16"), complete_date:  new Date("2024-01-21"), category: "Academics", time_spent: "7hrs"},
  { item_name: "Make Frontend", description: "Add pie chart", start_date:  new Date("2024-01-16"), complete_date:  new Date("2024-01-21"), category: "Academics", time_spent: "7hrs"},
  { item_name: "Make Frontend", description: "Add pie chart", start_date:  new Date("2024-01-16"), complete_date:  new Date("2024-01-21"), category: "Academics", time_spent: "7hrs"},
  { item_name: "Make Frontend", description: "Add pie chart", start_date:  new Date("2024-01-16"), complete_date:  new Date("2024-01-21"), category: "Academics", time_spent: "7hrs"},
  { item_name: "Make Frontend", description: "Add pie chart", start_date:  new Date("2024-01-16"), complete_date:  new Date("2024-01-21"), category: "Academics", time_spent: "7hrs"},
];

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