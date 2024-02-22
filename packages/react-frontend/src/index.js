import React from "react";
import ReactDOMClient from "react-dom/client";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MyApp from "./MyApp";
import "./index.css";

// Create the container
const container = document.getElementById("root");

// Create a root
const root = ReactDOMClient.createRoot(container);

// ReactDOM.render(
//     <Router>
//       <App />
//     </Router>,
//     document.getElementById('root')
//   );

// Initial render: Render an element to the Root
root.render(<MyApp />);