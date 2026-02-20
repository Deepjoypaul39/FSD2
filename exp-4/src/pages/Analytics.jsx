import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import Button from "react-bootstrap/Button";
import FilterBar from "../components/FilterBar";

function Analytics() {
  const { state, addTask, deleteTask } = useContext(AppContext);
  const [search, setSearch] = useState("");

  // Filter tasks using useMemo (Performance Optimization)
  const filteredTasks = useMemo(() => {
    return state.tasks.filter((task) =>
      task.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [state.tasks, search]);

  // Derived calculation using useMemo
  const totalTasks = useMemo(() => {
    return filteredTasks.length;
  }, [filteredTasks]);

  return (
    <div className="main-container">
      <div className="glass-card">

        {/* Heading */}
        <h2 style={{ marginBottom: "15px" }}>
          Task Analytics Dashboard
        </h2>

        {/* Explanation Section */}
        <div
          className="bg-light text-dark p-3 rounded mb-4"
          style={{ textAlign: "left" }}
        >
          <h5>About This Section</h5>
          <p>
            This Analytics Dashboard demonstrates advanced state management
            concepts in React.
          </p>

          <ul>
            <li>
              <strong>useContext</strong> is used to share global task state
              across multiple components.
            </li>
            <li>
              <strong>useReducer</strong> manages structured state updates
              such as adding and deleting tasks.
            </li>
            <li>
              <strong>useMemo</strong> optimizes performance by memoizing
              filtered and derived task data.
            </li>
          </ul>

          <p>
            This ensures efficient rendering and scalable state handling in
            modern React applications.
          </p>
        </div>

        {/* Add Task Button */}
        <Button
          variant="primary"
          className="mb-3"
          onClick={() =>
            addTask({
              id: Date.now(),
              name: "New Task " + (state.tasks.length + 1),
            })
          }
        >
          Add Task
        </Button>

        {/* Search Filter */}
        <FilterBar search={search} setSearch={setSearch} />

        {/* Total Tasks */}
        <h5 className="mt-3">Total Tasks: {totalTasks}</h5>

        {/* Task List */}
        {filteredTasks.length === 0 ? (
          <p className="mt-3">No tasks available.</p>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="d-flex justify-content-between align-items-center bg-light text-dark p-2 my-2 rounded shadow-sm"
            >
              {task.name}
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Analytics;