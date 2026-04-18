import { useEffect, useState } from "react";
import API from "../api/axios";
import "./Dashboard.css";

function UserDashboard() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    API.get("/api/user/profile")
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg("Unauthorized"));
  }, []);

  return (
    <div className="dashboard">
      <h1>👤 User Dashboard</h1>
      <p>{msg}</p>
    </div>
  );
}

export default UserDashboard;