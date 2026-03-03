import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./Reports.css";

const Reports = () => {
  const tasks = useSelector((state) => state.tasks.items);

  /* ===== BASIC STATS ===== */
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;
  const pending = active;
  const rate = total === 0 ? 0 : Math.round((completed / total) * 100);

  const velocity = 2; // You can make dynamic later

  /* ===== PRIORITY BREAKDOWN ===== */
  const highTasks = tasks.filter((t) => t.priority === "High");
  const mediumTasks = tasks.filter((t) => t.priority === "Medium");
  const lowTasks = tasks.filter((t) => t.priority === "Low");

  const percent = (arr) =>
    arr.length === 0
      ? 0
      : Math.round(
          (arr.filter((t) => t.completed).length / arr.length) * 100
        );

  const highPercent = percent(highTasks);
  const mediumPercent = percent(mediumTasks);
  const lowPercent = percent(lowTasks);

  /* ===== CATEGORY BREAKDOWN ===== */
  const categories = ["AI/ML", "Frontend", "Backend", "DevOps", "Academics"];

  const categoryData = useMemo(() => {
    return categories.map((cat) => {
      const catTasks = tasks.filter((t) => t.category === cat);
      const done = catTasks.filter((t) => t.completed).length;
      return {
        name: cat,
        done,
        total: catTasks.length,
        percent:
          catTasks.length === 0
            ? 0
            : Math.round((done / catTasks.length) * 100),
      };
    });
  }, [tasks]);

  /* ===== SCORE + GRADE ===== */
  const score = Math.min(100, rate + velocity);
  const grade =
    score >= 80 ? "A" : score >= 65 ? "B" : score >= 50 ? "C" : "D";

  return (
    <div className="reports-container">

      <p className="section-tag">NEW PAGE — EXPERIMENT 5</p>
      <h1 className="reports-title">Performance Reports</h1>

      <p className="reports-subtitle">
        Deep insights for <strong>Deepjoy Paul</strong> — Chandigarh University · 3rd Year
      </p>

      {/* ===== SCORE CARD ===== */}
      <div className="score-card">
        <h2>{score}</h2>
        <p>/100</p>
        <span>Grade {grade}</span>
      </div>

      {/* ===== TOP STATS ===== */}
      <div className="stats-grid">
        <StatCard number={total} label="Total Tasks" />
        <StatCard number={completed} label="Completed" />
        <StatCard number={active} label="In Progress" />
        <StatCard number={pending} label="Pending" />
        <StatCard number={`${rate}%`} label="Rate" />
        <StatCard number={velocity} label="Velocity/wk" />
      </div>

      {/* ===== CATEGORY SECTION ===== */}
      <div className="report-grid">

        <div className="report-box">
          <h3>By Category</h3>
          {categoryData.map((cat) => (
            <div key={cat.name} className="progress-row">
              <span>{cat.name}</span>
              <span>{cat.done}/{cat.total}</span>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${cat.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* PRIORITY */}
        <div className="report-box">
          <h3>By Priority</h3>

          <PriorityRow label="High" percent={highPercent} />
          <PriorityRow label="Medium" percent={mediumPercent} />
          <PriorityRow label="Low" percent={lowPercent} />
        </div>

      </div>

      {/* ===== AI SUMMARY ===== */}
      <div className="ai-summary">
        <h4>AI Generated Summary</h4>
        <p>
          Deepjoy has achieved a <strong>{rate}% completion rate</strong> with a weekly
          velocity of <strong>{velocity} tasks/week</strong>.
          Current productivity score is <strong>{score}/100</strong> (Grade {grade}).
          Strong performance in AI/ML and backend-oriented projects.
        </p>
      </div>

    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div className="stat-card">
    <h3>{number}</h3>
    <p>{label}</p>
  </div>
);

const PriorityRow = ({ label, percent }) => (
  <div className="progress-row">
    <span>{label} Priority</span>
    <span>{percent}%</span>
    <div className="bar">
      <div
        className="fill"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

export default Reports;