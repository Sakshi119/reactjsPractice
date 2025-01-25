import './App.css';
import Counter from './Components/counterApp/counter';
import TodoApp from './Components/toDoList/todo-list';
import Weatherapp from './Components/weatherApp/weather-app';
import Calculator from './Components/calculatorApp/calculator';
import React from 'react';

function App() {
  return (
    <div>
      <div className="app">
        <h1>Simple Counter App</h1>
        <Counter />    
      </div>
      <div className='app2'>
        <TodoApp />
      </div>
      <div className='weather-app'>
        <Weatherapp />
      </div>
      <div className='calculator'>
        <Calculator />
      </div>
    </div>   
  );
}

export default App;
