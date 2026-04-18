import { Link } from "react-router-dom";
import { logout, getRole } from "../utils/auth";

function Navbar() {
  const role = getRole();

  return (
    <div>
      <Link to="/user">User</Link> |{" "}
      {role === "ADMIN" && <Link to="/admin">Admin</Link>} |{" "}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;