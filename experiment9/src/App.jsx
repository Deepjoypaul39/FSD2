import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { isAuth, getRole } from "./utils/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* User Route */}
        <Route
          path="/user"
          element={
            isAuth() ? <UserDashboard /> : <Navigate to="/" />
          }
        />

        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            isAuth() && getRole() === "ADMIN"
              ? <AdminDashboard />
              : <Navigate to="/" />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;