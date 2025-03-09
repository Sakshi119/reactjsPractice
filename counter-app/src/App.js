import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './Components/counterApp/counter';
import TodoApp from './Components/toDoList/todo-list';
import Weatherapp from './Components/weatherApp/weather-app';
import Calculator from './Components/calculatorApp/calculator';
import ImageSearch from './Components/imageSearchApp/imageSearch';

import './App.css';
import DictionaryApp from './Components/dictionaryApp/dictionaryApp';

function Home() {
  return (
    <div className='index-page'>
      <h1>My React Apps</h1>
      <ul>
        <li><Link to="/counter">Counter App</Link></li>
        <li><Link to="/todo">To-Do List App</Link></li>
        <li><Link to="/weather">Weather App</Link></li>
        <li><Link to="/calculator">Calculator App</Link></li>
        <li><Link to="/image-search">Image Search App</Link></li>
        <li><Link to="/dictionary-app">Dictionary App</Link></li>
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
        <Route path='/image-search' element={<ImageSearch />} />
        <Route path="/dictionary-app" element={<DictionaryApp />} />
      </Routes>
    </Router>
  );
}

export default App;
