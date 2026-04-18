const login = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8080/api/user/profile",
      {
        auth: { username, password },
      }
    );

    if (res.status === 200) {
      sessionStorage.setItem("user", username);
      sessionStorage.setItem(
        "role",
        username.includes("admin") ? "ADMIN" : "USER"
      );

      window.location.href =
        username.includes("admin") ? "/admin" : "/user";
    }
  } catch (error) {
    alert("Login Failed ❌ (Check username/password or backend)");
  }
};