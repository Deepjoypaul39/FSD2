function App() {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-primary bg-gradient">
      <div className="card shadow-lg p-4 text-center" style={{width: "400px"}}>
        <h1 className="fw-bold">Deepjoy Paul</h1>
        <p className="text-warning">UID: 23BAI70442</p>

        <div className="card mt-3">
          <div className="card-body">
            <h4>About Me</h4>
            <p>I am a B.Tech AIML student passionate about Full Stack.</p>
          </div>
        </div>

        <div className="card mt-2">
          <div className="card-body">
            <h4>Skills</h4>
            <p>React, JS, Python, HTML, CSS</p>
          </div>
        </div>

        <div className="card mt-2">
          <div className="card-body">
            <h4>Contact</h4>
            <p>deepjoy@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
