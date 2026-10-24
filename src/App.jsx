
import { useState } from "react";
import TaskItem from "./TaskItem";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(
    (item) => !item.completed
  ).length;

  function addTask() {
    if (task.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      text: task.trim(),
      completed: false
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTask("");
  }

  function deleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((item) => item.id !== id)
    );
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  function clearCompleted() {
    setTasks((prevTasks) =>
      prevTasks.filter((item) => !item.completed)
    );
  }

  return (
    <div className="app">
      <h1>My Task Tracker</h1>

      <h3>Total Tasks: {totalTasks}</h3>
      <p>Pending Tasks: {pendingTasks}</p>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={addTask}
        disabled={task.trim() === ""}
      >
        Add Task
      </button>

      <button
        onClick={clearCompleted}
        type="button"
      >
        Clear Completed
      </button>

      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <ul>
          {tasks.map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
