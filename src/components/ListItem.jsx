
export function ListItem ({ todos }) {
  const key = todos.id;
  const handleDelete = () => {
    if (todos.isCompleted === false) {
      todos.isCompleted = true;
      document.getElementById(todos.id).style.textDecoration = 'line-through'; 
    };
    console.log(todos.isCompleted);
  }

  return (
    <ul className="list">
      <li id={key}><input type="checkbox" onClick={handleDelete}/>{todos.task}</li>
    </ul>
  )
}