import { assignTask } from "../api/taskApi";

function TaskCard({ task, refreshTasks }) {
  const handleAssign = async () => {
    try {
      await assignTask(task.id);

      refreshTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusClass = () => {
    if (task.status === "in progress") {
      return "in-progress";
    }

    return task.status;
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Assignee:</strong>{" "}
        {task.assignee || "Not Assigned"}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span
          className={`status ${getStatusClass()}`}
        >
          {task.status}
        </span>
      </p>

      <p>
        <strong>Created At:</strong>{" "}
        {new Date(
          task.createdAt
        ).toLocaleString()}
      </p>

      <p>
        <strong>Due At:</strong>{" "}
        {new Date(task.dueAt).toLocaleString()}
      </p>

      {task.status === "open" && (
        <button onClick={handleAssign}>
          Assign to Backend
        </button>
      )}
    </div>
  );
}

export default TaskCard;