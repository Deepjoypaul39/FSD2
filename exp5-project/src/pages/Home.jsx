import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const words = [
  "Full-Stack Developer",
  "Deep Learning Explorer",
  "AI/ML Engineer",
  "Open Source Contributor",
  "React Performance Optimizer",
];

const Home = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing Animation
  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <div className="home-container">
      {/* LEFT SECTION */}
      <div className="home-left">
        <span className="exp-badge">
          ● EXPERIMENT 5 — REDUX · CONTEXT · useMemo
        </span>

        <h1>
          Hello, I’m <br />
          <span className="gradient-name">Deepjoy Paul</span>
        </h1>

        <h2 className="typing">
          I’m a — <span>{text}</span>
          <span className="cursor">|</span>
        </h2>

        <div className="info-box hover-grow">
          <strong>BE – Computer Science & Engineering (AI/ML)</strong>
          <p>Chandigarh University</p>
        </div>

        <p className="description">
          I craft intelligent systems and elegant web experiences — merging
          deep learning with modern frontend architecture to build products
          that are both smart and beautiful.
        </p>

        <div className="btn-group">
          <button
            className="btn primary hover-grow"
            onClick={() => navigate("/projects")}
          >
            View Projects →
          </button>

          <button
            className="btn gold hover-grow"
            onClick={() => navigate("/reports")}
          >
            Reports (New ✦)
          </button>

          <button
            className="btn outline hover-grow"
            onClick={() => navigate("/analytics")}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* RIGHT PROFILE CARD */}
      <div className="profile-card hover-grow">
        <div className="dp-circle">DP</div>
        <h3>Deepjoy Paul</h3>
        <p>AI/ML Engineer</p>

        <div className="profile-info">
          <div>
            <span>University</span>
            <strong>Chandigarh University</strong>
          </div>

          <div>
            <span>Year</span>
            <strong>3rd Year (2023–2027)</strong>
          </div>

          <div>
            <span>CGPA</span>
            <strong>7.5 / 10</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>
              Kharar, NH-95 Chandigarh–Ludhiana Highway,
              Gharuan, Mohali, Punjab, India
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;