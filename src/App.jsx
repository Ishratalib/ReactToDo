import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Delete Task
  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Edit Task
  const editTask = (index) => {
    setInputVal(todos[index]);
    setEditIndex(index);
  };

  // Update Task
  const updateTask = () => {
    if (inputVal.trim() == "") {
      return;
    }
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = inputVal;
    setTodos(updatedTodos);
    setInputVal("");
    setEditIndex(null);
  };

  // Add Task
  const addTask = () => {
    if (inputVal.trim() == "") {
      return;
    }
    setTodos([...todos, inputVal]);
    setInputVal("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>TO DO LIST</h1>

      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter a task..."
      />

      {editIndex === null ? (
        <button onClick={addTask}>Add Task</button>
      ) : (
        <button onClick={updateTask}>Update Task</button>
      )}

      <ul>
        {todos.map((item, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {item} <button onClick={() => editTask(index)}>Edit</button>{" "}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
