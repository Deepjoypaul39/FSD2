import { useEffect, useState } from "react";
import API from "../api/axios";
import "./Dashboard.css";

function AdminDashboard() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    API.get("/api/admin/dashboard")
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg("Access Denied"));
  }, []);

  return (
    <div className="dashboard admin">
      <h1>👨‍💼 Admin Dashboard</h1>
      <p>{msg}</p>
    </div>
  );
}

export default AdminDashboard;