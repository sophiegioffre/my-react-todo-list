//import logo from './logo.svg';
import { useState } from 'react';
import { List } from './components/List';
import './App.css';
import { AddForm } from './components/AddForm';

function App() {
  const [todos, setTodos] = useState('');
  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">ToDo List</h1>
        <List />
        <AddForm />
      </header>
    </div>
  );
}

export default App;
