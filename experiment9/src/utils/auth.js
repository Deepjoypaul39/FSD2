export const login = (username, password) => {
  const token = btoa(username + ":" + password);

  sessionStorage.setItem("token", token);

  if (username === "admin1") {
    sessionStorage.setItem("role", "ADMIN");
  } else {
    sessionStorage.setItem("role", "USER");
  }
};

export const logout = () => {
  sessionStorage.clear();
};

export const isAuth = () => {
  return !!sessionStorage.getItem("token");
};

export const getRole = () => {
  return sessionStorage.getItem("role");
};