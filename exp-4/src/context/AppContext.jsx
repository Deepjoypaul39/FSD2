import { createContext, useReducer } from "react";
import appReducer from "../reducer/appReducer";

export const AppContext = createContext();

const initialState = {
  theme: "light",
  tasks: []
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <AppContext.Provider
      value={{ state, toggleTheme, addTask, deleteTask }}
    >
      {children}
    </AppContext.Provider>
  );
};