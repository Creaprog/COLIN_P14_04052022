import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import React, { useEffect, useState } from "react";
import ListEmployees from './ListEmployees/ListEmployees';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('employees') !== null) {
      setEmployees(JSON.parse(localStorage.getItem('employees')));
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home setEmployees={setEmployees} />} />
      <Route path="/employee" element={<ListEmployees employees={employees} />} />
    </Routes>
  );
}

export default App;
