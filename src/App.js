import React from 'react';
import logo from './logo.svg';
import Navbar from "./components/Nav";
import Jumbotron from "./components/Jumbotron"
import './App.css';

function App() {
  return (
    <div className="Container">
     <Navbar />
     <Jumbotron />
    </div>
  );
}

export default App;
