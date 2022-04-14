import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import React, { useState } from "react";
import ListEmployees from './ListEmployees/ListEmployees';

function App() {
  const [employees, setEmployees] = useState([]);
  console.log(employees);
  return (
    <Routes>
      <Route path="/" element={<Home setEmployees={setEmployees} />} />
      <Route path="/employees" element={<ListEmployees employees={employees} />} />
    </Routes>
  );
}

export default App;
