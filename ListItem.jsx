
export function ListItem ({ todos }) {
  return (
    <div>
      <ul>
        <li>{todos.task}</li>
      </ul>
    </div>
  )
}