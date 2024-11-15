import { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const WorkingWithArrays = () => {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  
  const API = `${REMOTE_SERVER}/lab5/todos`;

  return (
    <div id="wd-working-with-arrays">
      <h2 className="fw-bold">Working with Arrays</h2>
      {/* CREATE Operation - From CRUD Operations */}
      <h3>Creating new Items in an Array (CRUD - Create Operation)</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a><hr/>
      
      {/* READ Operation - From CRUD Operations */}
      <h3>Retrieving Arrays (CRUD - Read Operations)</h3>
      <a
        id="wd-retrieve-todos"
        className="btn btn-primary"
        href={API}
      >
        Get Todos
      </a><br /><br />

      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      /><br />

      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}-completed?completed=true`}
      >
        Get Completed Todos
      </a><hr/>

      {/* UPDATE Operation - From CRUD Operations */}
      <h3>Updating an Item in an Array (CRUD - Update Operation)</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary float-end"
      >
        Update Todo Title
      </a>
      <input
        defaultValue={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        type="text"
        defaultValue={todo.title}
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value }) }
      /><br /><br />

      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary float-end"
      >
        Update Todo Completed
      </a>
      <input
        defaultValue={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        className="float-start"
        onChange={(e) => setTodo({ ...todo, completed: Boolean(e.target.value) }) }
      /><br /><br />

      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary float-end"
      >
        Update Todo Description
      </a>
      <input
        defaultValue={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        type="text"
        defaultValue={todo.description}
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, description: e.target.value }) }
      />
      <br /><br /><hr />

      {/* DELETE Operation - From CRUD Operations */}
      <h3>Deleting from an Array (CRUD - Delete Operation)</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <input
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      /><hr/>
    </div>
  );
};

export default WorkingWithArrays;
