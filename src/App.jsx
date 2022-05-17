import { useState } from 'react';
import { ListItem } from './components/ListItem';
import { AddForm } from './components/AddForm';
import './App.css';


function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {id: 1, task: "brush teeth", isCompleted: false},
    {id: 2, task: "wash face", isCompleted: false},
    {id: 3, task: "drink water", isCompleted: false}
  ]);
  
  const handleClick = (event) => {
    const updateTodos = [...todos, {id: (todos.length + 1), task: value, isCompleted: false}];
    setTodos(updateTodos);
    setValue('');
    console.log(updateTodos);
    event.preventDefault();
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">ToDo List</h1>
        {todos.map((element) => (
          <ListItem key={element.id} todos={element} isCompleted={element.isCompleted}/>
        ))}
        <AddForm handleClick={handleClick} value={value} setValue={setValue}/>
      </header>
    </div>
  );
}

export default App;
