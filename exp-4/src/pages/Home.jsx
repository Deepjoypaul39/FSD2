function Home() {
  return (
    <div className="main-container">
      <div className="glass-card">
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          Deepjoy Paul
        </h1>

        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          B.Tech CSE (AI & ML) | Frontend Developer | React Enthusiast
        </p>

        <hr style={{ margin: "20px 0", opacity: 0.3 }} />

        <p>
          This project demonstrates advanced React concepts including
          <b> useContext, useReducer, and useMemo</b>. It showcases global state
          management, optimized rendering, and dynamic routing using React Router.
        </p>

        <div style={{ marginTop: "20px" }}>
          <h5>Skills Used:</h5>
          <p>React.js • Bootstrap • Context API • Reducer Pattern • Vite</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="coding"
          style={{
            width: "100%",
            borderRadius: "15px",
            marginTop: "25px"
          }}
        />
      </div>
    </div>
  );
}

export default Home;