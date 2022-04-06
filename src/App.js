import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import React, { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Home setEmployees={setEmployees} />} />
    </Routes>
  );
}

export default App;
