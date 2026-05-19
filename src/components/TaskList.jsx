import TaskCard from "./TaskCard";

function TaskList({ tasks, refreshTasks }) {
  return (
    <div>
      <h2 className="task-list-title">
        Tasks
      </h2>

      {tasks.length === 0 ? (
        <div className="empty-state">
          No tasks found
        </div>
      ) : (
        <div className="task-grid">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              refreshTasks={refreshTasks}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;