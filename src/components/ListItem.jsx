
export function ListItem ({ todos }) {
  const key = todos.id;

  const handleDelete = () => {
    if (todos.isCompleted === false) {
      todos.isCompleted = true;
      document.getElementById(key).style.textDecoration = 'line-through'; 
    }else if (todos.isCompleted === true) {
      todos.isCompleted = false;
      document.getElementById(key).style.textDecoration = 'none'; 
    }
    console.log(`${todos.task} is completed: ${todos.isCompleted}`);
  }

  return (
    <ul className="list">
      <li id={key}><input type="checkbox" onClick={handleDelete}/>{todos.task}</li>
    </ul>
  )
}