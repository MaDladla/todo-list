import './App.css';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';



import React from "react";
import Register from './register';
import Home from './login';
import List from'./list';
// import {
// BrowserRouter as Router,

//   Switch,
//   Route,
  
// } from "react-router-dom";

export default function App() {
  return (
    
    
      
      /* { <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> } } */

        /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
            
        <Router>

          
          <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/list" element={<List/>}/>
        <Route exact path="/register" element={<Register/>}/>
        </Routes>
        </Router>
      
    
   
  );
}
