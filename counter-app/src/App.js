import logo from './logo.svg';
import './App.css';
import Counter from './Components/counterApp/counter';
import TodoApp from './Components/toDoList/todo-list';

function App() {
  return (
    <>
    <div className="app">
      <h1>Simple Counter App</h1>
      <Counter />    
    </div>

    <div className='app2'>
      <TodoApp />
    </div>
    </>
    
  );
}

export default App;
