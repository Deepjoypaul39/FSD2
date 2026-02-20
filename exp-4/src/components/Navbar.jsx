import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <Link className="navbar-brand fw-bold" to="/">
        Deepjoy Dashboard
      </Link>

      <div className="ms-auto">
        <Link className="btn btn-outline-light me-2" to="/">
          Home
        </Link>
        <Link className="btn btn-outline-light me-2" to="/projects">
          Projects
        </Link>
        <Link className="btn btn-outline-light" to="/analytics">
          Analytics
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;