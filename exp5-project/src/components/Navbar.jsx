import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { toggleTheme } = useContext(AppContext);

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/reports">Reports</Link>
      </div>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;