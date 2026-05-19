import { useEffect, useState } from "react";

import { getTasks } from "./api/taskApi";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();

      // Prevent strict mode warning
      queueMicrotask(() => {
        setTasks(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      await fetchTasks();
    };

    initialize();

    const interval = setInterval(() => {
      fetchTasks();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>Task Management System</h1>

      <TaskForm refreshTasks={fetchTasks} />

      <TaskList
        tasks={tasks}
        refreshTasks={fetchTasks}
      />
    </div>
  );
}

export default App;