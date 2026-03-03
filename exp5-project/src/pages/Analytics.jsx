import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  toggleTask,
  deleteTask,
  clearCompleted,
} from "../redux/slices/taskSlice";
import "./Analytics.css";

const categories = ["AI/ML", "Frontend", "Backend", "DevOps", "Academics"];
const filters = ["All", "Active", "Completed", ...categories];

const Analytics = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("AI/ML");
  const [priority, setPriority] = useState("Medium");
  const [activeFilter, setActiveFilter] = useState("All");

  /* ====== STATS ====== */
  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;
  const active = total - done;
  const high = tasks.filter((t) => t.priority === "High").length;

  const rate = total === 0 ? 0 : Math.round((done / total) * 100);

  /* ====== FILTER LOGIC ====== */
  const filteredTasks = useMemo(() => {
    if (activeFilter === "All") return tasks;
    if (activeFilter === "Active")
      return tasks.filter((t) => !t.completed);
    if (activeFilter === "Completed")
      return tasks.filter((t) => t.completed);

    return tasks.filter((t) => t.category === activeFilter);
  }, [tasks, activeFilter]);

  /* ====== ADD TASK ====== */
  const handleAdd = () => {
    if (!title.trim()) return;

    dispatch(
      addTask({
        title,
        category,
        priority,
      })
    );

    setTitle("");
  };

  return (
    <div className="analytics-container">

      <p className="section-tag">FROM EXPERIMENT 4</p>
      <h1 className="analytics-title">Task Analytics</h1>
      <p className="analytics-subtitle">
        Redux Toolkit state management — dispatch, select, filter and track.
      </p>

      {/* ===== STATS ===== */}
      <div className="stats-grid">
        <StatCard number={total} label="Total" />
        <StatCard number={done} label="Done" green />
        <StatCard number={active} label="Active" yellow />
        <StatCard number={`${rate}%`} label="Rate" pink />
        <StatCard number={high} label="High ⚠" red />
      </div>

      {/* ===== PROGRESS ===== */}
      <div className="progress-box">
        <div className="progress-top">
          <span>Overall Completion</span>
          <span>{rate}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${rate}%` }}
          ></div>
        </div>
      </div>

      {/* ===== ADD TASK ===== */}
      <div className="task-input-box">
        <input
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button onClick={handleAdd}>+ Add</button>
      </div>

      {/* ===== FILTER BUTTONS ===== */}
      <div className="filter-row">
        {filters.map((f) => (
          <button
            key={f}
            className={activeFilter === f ? "filter active" : "filter"}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}

        <button className="clear-btn" onClick={() => dispatch(clearCompleted())}>
          Clear Done
        </button>
      </div>

      {/* ===== TASK LIST ===== */}
      <div className="task-list">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <div
              className="task-title"
              onClick={() => dispatch(toggleTask(task.id))}
            >
              {task.title}
            </div>

            <div className="task-tags">
              <span className="category-tag">{task.category}</span>
              <span className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
              <button
                className="delete-btn"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ number, label, green, yellow, pink, red }) => (
  <div
    className={`stat-card 
      ${green ? "green" : ""} 
      ${yellow ? "yellow" : ""} 
      ${pink ? "pink" : ""} 
      ${red ? "red" : ""}`}
  >
    <h2>{number}</h2>
    <p>{label}</p>
  </div>
);

export default Analytics;