import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import React, { useEffect, useState } from "react";
import ListEmployees from './ListEmployees/ListEmployees';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    //TODO: j'ai un warning, si j'ajoute employees je vais avoir une boucle infini...
    if (localStorage.getItem('employees') === null) {
      if (employees.length > 0) {
        localStorage.setItem('employees', JSON.stringify(employees));
      }
    } else {
      setEmployees(JSON.parse(localStorage.getItem('employees')));
    }
  }, []);
  console.log(employees);
  return (
    <Routes>
      <Route path="/" element={<Home setEmployees={setEmployees} />} />
      <Route path="/employee" element={<ListEmployees employees={employees} />} />
    </Routes>
  );
}

export default App;
