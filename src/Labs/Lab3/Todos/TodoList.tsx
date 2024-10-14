import TodoItem from "./TodoItem";
import todos from "./Todos.json";

const TodoList = () => {
  return(
    <>
      <h3>Todo List</h3>
      <ul className="list-group">
        {todos.map(todo => {
            return(<TodoItem key={todo.key} todo={todo}/>);
          })
        }
      </ul>
      <hr/>
    </>
  );
}
export default TodoList;