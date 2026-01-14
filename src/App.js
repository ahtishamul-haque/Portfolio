import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section with centered name and resume button */}
      <section id="header" className="header-section">
        <div className="header-content">
          <h1 className="header-name">Hey, I am Ahtishamul Haque</h1>
          <a
            href="/Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Resume
          </a>
        </div>
        <p>
          I'm a computer science engineering student in pursuit of becoming a productive professional with a keen interest in problem-solving and software development.
        </p>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>Education</h2>
      <div class="education-entry">
        <div class="edu-header">
          <h3>Chaudhary Charan Singh University</h3>
          <span class="edu-location">Meerut, Uttar Pradesh</span>
        </div>
        <div class="edu-details">
          <p class="edu-degree">B.Tech - Computer Science</p>
          <p class="edu-date">Jul 2021 - May 2025</p>
        </div>
      </div>
      <div class="education-entry">
        <div class="edu-header edu-header-b">
          <h3>St. Xavier's School</h3>
          <span class="edu-location">Belthara Road, Ballia, Uttar Pradesh</span>
        </div>
        <div class="edu-details">
          <p class="edu-degree">Class XII</p>
          <p class="edu-date">May 2020</p>
        </div>
      </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="experience-section">
        <h2>Work Experience</h2>
      <div className="experience-item">
      <div className="experience-header">
        <h3 className="experience-title">Indian Railways</h3>
        <span className="experience-location">Varanasi</span>
      </div>
      <div className="experience-meta">
        <span className="experience-role">Software Engineer Intern</span>
        <span className="experience-duration">Jul 2023 – Aug 2023</span>
      </div>
        <ul className="experience-list">
          <li>&bull;&nbsp; Developed a web application based on Library Information and Booking Management System.</li>
          <li>&bull;&nbsp; Integrate database like MongoDB and APIs for data-driven application.</li>
          <li>&bull;&nbsp; Ensure web application security, scalability, and performance.</li>
          <li>&bull;&nbsp; Assist in designing, developing, and testing other web applications with team.</li>
        </ul>
      </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
      <h2>Projects</h2>

      {/* Project 1 */}
      <div className="project-item">
        <div className="project-header">
          <h3 className="project-title">Trip Mate – Vacation Rental System</h3>
          <span className="project-links project-links-a">
          [ <a href="https://github.com/ahtishamul-haque/Trip-Mate-Vacation-Rental-System" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://major-project-trip-mate.onrender.com/listings" target="_blank" rel="noreferrer">Live Demo</a> ]
          </span>
          <span className="project-date">Oct 2023</span>
        </div>
        <div className="project-description">
          <p className="dot-line">Developed a web application connecting hosts and guests for vacation rental bookings.</p>
          <p className="dot-line">Implemented client-side routing for navigation between pages.</p>
          <p className="dot-line">Enabled search functionality with filters for location, price, and availability.</p>
          <p className="dot-line">Integrated MVC structure, authentication, and MongoDB database.</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-item">
        <div className="project-header">
          <h3 className="project-title">Wikipedia Search Engine</h3>
          <span className="project-links project-links-b">
          [ <a href="https://github.com/ahtishamul-haque/Wikipedia-Search-Engine" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://project-wikipedia.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a> ]
          </span>
          <span className="project-date">Mar 2023</span>
        </div>

        <div className="project-description">
          <p className="dot-line">Built a dynamic app using HTML, CSS, JS to fetch data from Wikipedia API.</p>
          <p className="dot-line">Used asynchronous JavaScript for real-time search results.</p>
          <p className="dot-line">Designed a responsive UI using Bootstrap for mobile compatibility.</p>
          <p className="dot-line">Focused on real-time UX feedback and fast data delivery.</p>
        </div>
      </div>
      </section>


      {/* Skills Section */}
      <section id="skills">
        <h2>Languages</h2>
        <ul className="languages">
          <li>C</li>
          <li>JavaScript</li>
          <li>Java</li>
        </ul>
      </section>
      <section id="skills">
        <h2 className="tf">Technologies/Frameworks</h2>
        <ul className="tech">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Express</li>
          <li>React</li>
          <li>NodeJS</li>
          <ul className="tech">
          <li>Redux</li>
          <li>Tailwind</li>
          <li>Git</li>
          </ul>
        </ul>
      </section>
      <section id="skills">
        <h2>Databases</h2>
        <ul className="data">
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </section>
      <section id="skills">
        <h2>Tools</h2>
        <ul className="tool">
          <li>Terminal</li>
          <li>VS Code</li>
          <li>IntelliJ</li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <h2>Achievements</h2>
        <ul class="achievement-list">
          <li>
            <span class="achievement-text">&bull;&nbsp; Open Source Contributor - GSSoC (4+ pull requests accepted)</span>
            <span class="achievement-date">Oct 2024</span>
          </li>
          <li>
            <span class="achievement-text">&bull;&nbsp; Open Source Contributor - Hacktoberfest (4+ pull requests accepted)</span>
            <span class="achievement-date">Oct 2024</span>
          </li>
          <li>
            <span class="achievement-text">&bull;&nbsp; Open Source Contributor - DevFest (Rank 115 out of 1500)</span>
            <span class="achievement-date">Oct 2024</span>
          </li>
          <li>
            <span class="achievement-text">&bull;&nbsp; Problem Solving Certification - HackerRank</span>
            <span class="achievement-date">Apr 2024</span>
          </li>
          <li>
            <span class="achievement-text">&bull;&nbsp; Introduction to Generative AI Certification - Coursera</span>
            <span class="achievement-date">Oct 2023</span>
          </li>
          <li>
            <span class="achievement-text">&bull;&nbsp; Prompt Design in Vertex AI Certification - Google</span>
          </li>
          <li>
            <span class="achievement-text">&bull;&nbsp; Develop GenAI Apps with Gemini and Streamlit Certification - Google</span>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <ul class="contact-list">
          <li>
            <a href="tel:+91-9628707717" target="_blank">
            <i class="fas fa-phone"></i> +91-9628707717
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a href="mailto:ahtasamhaque099@gmail.com" target="_blank">
            <i class="fas fa-envelope"></i> ahtasamhaque099@gmail.com
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a href="https://linkedin.com/in/ahtishamul-haque-2136093a5" target="_blank">
            <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a href="https://github.com/ahtishamul-haque" target="_blank">
            <i class="fab fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="foot">
        &copy; {new Date().getFullYear()} Ahtishamul Haque &bull; All rights reserved
      </footer>
    </div>
  );
}

export default App;