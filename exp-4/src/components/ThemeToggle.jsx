import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ThemeToggle() {
  const { toggleTheme } = useContext(AppContext);

  return (
    <button className="btn btn-warning" onClick={toggleTheme}>
      Change Theme
    </button>
  );
}

export default ThemeToggle;