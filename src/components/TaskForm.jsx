import { useState } from "react";

import { createTask } from "../api/taskApi";

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueInHours, setDueInHours] = useState(24);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required");
      return;
    }

    try {
      await createTask({
        title,
        description,
        dueInHours,
      });

      alert("Task created successfully");

      refreshTasks();

      setTitle("");
      setDescription("");
      setDueInHours(24);
    } catch (error) {
      console.log(error);

      alert("Failed to create task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Due in hours"
        value={dueInHours}
        onChange={(e) =>
          setDueInHours(e.target.value)
        }
      />

      <button type="submit">
        Create Task
      </button>
    </form>
  );
}

export default TaskForm;