function Projects() {
  return (
    <div className="main-container">
      <div className="glass-card">
        <h2>My Projects</h2>

        <p style={{ marginTop: "10px" }}>
          Below are some academic and practical projects developed during my coursework.
        </p>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="bg-light text-dark p-3 rounded shadow-sm">
              <h5>React Dashboard (Experiment 4)</h5>
              <p>
                Implemented global state using Context API and managed structured
                updates with useReducer.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-light text-dark p-3 rounded shadow-sm">
              <h5>Portfolio Website</h5>
              <p>
                Designed responsive UI using Bootstrap with modern layout and
                animation effects.
              </p>
            </div>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="project"
          style={{
            width: "100%",
            borderRadius: "15px",
            marginTop: "30px"
          }}
        />
      </div>
    </div>
  );
}

export default Projects;