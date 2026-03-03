import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-section">

      <p className="section-tag">FROM EXPERIMENT 3</p>

      <h1 className="projects-title">Selected Work</h1>
      <p className="projects-subtitle">
        AI/ML systems and full-stack applications built at Chandigarh University.
      </p>

      <div className="projects-grid">

        {/* AI/ML Project */}
        <div className="project-card blue hover-grow">
          <div className="project-top">
            <span className="category">AI/ML · 2024</span>
            <span className="status completed">Completed</span>
          </div>

          <h3>Smart Traffic Control System</h3>

          <p>
            Deep learning-based real-time traffic density prediction system.
            Reduced average wait time by 32% using adaptive signal timing.
          </p>

          <div className="highlight-tags">
            <span>✓ 92% Accuracy</span>
            <span>✓ Real-Time Inference</span>
            <span>✓ Model Optimization</span>
          </div>

          <div className="tech-tags">
            <span>Python</span>
            <span>TensorFlow</span>
            <span>OpenCV</span>
            <span>Flask</span>
          </div>
        </div>

        {/* Portfolio Project */}
        <div className="project-card yellow hover-grow">
          <div className="project-top">
            <span className="category">Frontend · 2026</span>
            <span className="status live">Live</span>
          </div>

          <h3>Deepjoy.dev – Portfolio (Exp 5)</h3>

          <p>
            Advanced React portfolio integrating Redux Toolkit, Context API,
            useMemo and dynamic analytics dashboard with premium dark UI.
          </p>

          <div className="highlight-tags">
            <span>✓ Redux State Mgmt</span>
            <span>✓ Context + useMemo</span>
            <span>✓ 4-Page Routing</span>
          </div>

          <div className="tech-tags">
            <span>React</span>
            <span>Redux Toolkit</span>
            <span>Context API</span>
            <span>Vite</span>
          </div>
        </div>

        {/* NLP Project */}
        <div className="project-card green hover-grow">
          <div className="project-top">
            <span className="category">NLP · 2024</span>
            <span className="status completed">Completed</span>
          </div>

          <h3>BERT Sentiment Analysis API</h3>

          <p>
            Fine-tuned BERT model achieving 94% accuracy. Deployed as scalable
            FastAPI service with Docker support.
          </p>

          <div className="highlight-tags">
            <span>✓ 94% F1 Score</span>
            <span>✓ Batch + Async</span>
            <span>✓ Dockerized</span>
          </div>

          <div className="tech-tags">
            <span>Python</span>
            <span>BERT</span>
            <span>FastAPI</span>
            <span>Docker</span>
          </div>
        </div>

        {/* Full Stack Project */}
        <div className="project-card pink hover-grow">
          <div className="project-top">
            <span className="category">Full-Stack · 2023</span>
            <span className="status completed">Completed</span>
          </div>

          <h3>MERN E-Commerce Platform</h3>

          <p>
            Full-featured online store with JWT authentication, Stripe payments,
            real-time inventory and admin dashboard.
          </p>

          <div className="highlight-tags">
            <span>✓ JWT + Auth</span>
            <span>✓ Stripe Payments</span>
            <span>✓ Admin Panel</span>
          </div>

          <div className="tech-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;