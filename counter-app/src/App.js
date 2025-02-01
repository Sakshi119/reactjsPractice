import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './Components/counterApp/counter';
import TodoApp from './Components/toDoList/todo-list';
import Weatherapp from './Components/weatherApp/weather-app';
import Calculator from './Components/calculatorApp/calculator';
import './App.css';

function Home() {
  return (
    <div className='index-page'>
      <h1>My React Apps</h1>
      <ul>
        <li><Link to="/counter" target="_blank">Counter App</Link></li>
        <li><Link to="/todo" target="_blank">To-Do List App</Link></li>
        <li><Link to="/weather" target="_blank">Weather App</Link></li>
        <li><Link to="/calculator" target="_blank">Calculator App</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/weather" element={<Weatherapp />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
