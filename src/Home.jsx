import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1 className="title-name">Nithish Adhi</h1>
        <nav className="title-util">
          <Link
            to="/About"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2 className="title-util-item">About</h2>
          </Link>
          
          <Link to="/MyWork" style={{textDecoration: "none", color: "inherit"}}><h2 className="title-util-item">My work</h2></Link>
          <h2 className="title-util-item">Projects</h2>
          <h2 className="title-util-item">Posts</h2>
          <h2 className="title-util-item">Contact Me</h2>
        </nav>
        <h1 className="title-translate">Resume</h1>
      </header>

      <main>
        <div className="wrapper-about">
          <section class="about">
            <div className="section-header">
              <h2 className="section-name">Nithish Adhi </h2>
              <div className="icon-container">
                <a href="mailto:nithishadhi3124@gmail.com">
                  <img className="icon-style" src="mail.svg"></img>
                </a>
                <a href="https://github.com/NithishAdhi">
                  <img className="icon-style" src="github.svg"></img>
                </a>
                <a href="https://leetcode.com/u/Nithish_A/">
                  <img className="icon-style" src="leetcode.svg"></img>
                </a>
              </div>
            </div>
            <p className="section-location">
              <img src="sewing-pin.svg"></img>Tamilnadu,India
            </p>
            <p className="section-about">
              I'm 20-year-old Full-Stack Web Developer. I have been programming
              for more than 6 years. I create professional websites.
            </p>
          </section>
          <div className="wrapper-info">
            <h2 className="section-name">What I work with</h2>
            <div className="section-stack">
              <div className="stack-item">
                <img src="reactjs.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="stack-item">
                <img src="nextjs.svg" alt="Next.js" />
                <span>Next.js</span>
              </div>
              <div className="stack-item">
                <img src="javascript.svg" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="stack-item">
                <img src="typescript.svg" alt="TypeScript" />
                <span>TypeScript</span>
              </div>
              <div className="stack-item">
                <img src="expressjs.svg" alt="Express.js" />
                <span>ExpressJs</span>
              </div>
              <div className="stack-item">
                <img src="nodejs.svg" alt="Node.js" />
                <span>NodeJs</span>
              </div>
              <div className="stack-item">
                <img src="vite.svg" alt="Vite" />
                <span>Vite</span>
              </div>
              <div className="stack-item">
                <img src="mongodb.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="stack-item">
                <img src="git.svg" alt="Git" />
                <span>Git</span>
              </div>
              <div className="stack-item">
                <img src="java.svg" alt="Java" />
                <span>Java</span>
              </div>
            </div>
          </div>
          <div className="wrapper-experience">
            <h2 className="section-experience">Experience</h2>
            <div className="experiences">
              <img className="timeline-img" src="timeline.svg"></img>
              <div className="experience-list">
                <div className="experience-tab">
                  <a className="link" href="#">
                    Project
                  </a>
                  <h2 className="role">Full-Stack Web Developer</h2>
                  <h3 className="duration">October, 2023 - March, 2024</h3>
                  <p className="desc">
                    This is a sample description of the project details and the
                    work done. This is an extra line
                  </p>
                </div>
                <div className="experience-tab">
                  <a className="link" href="#">
                    Project
                  </a>
                  <h2 className="role">Full-Stack Web Developer</h2>
                  <h3 className="duration">October, 2023 - March, 2024</h3>
                  <p className="desc">
                    This is a sample description of the project details and the
                    work done.
                  </p>
                </div>
                <div className="experience-tab">
                  <a className="link" href="#">
                    Project
                  </a>
                  <h2 className="role">Full-Stack Web Developer</h2>
                  <h3 className="duration">October, 2023 - March, 2024</h3>
                  <p className="desc">
                    This is a sample description of the project details and the
                    work done.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-project">
            <h1 className="section-work">My Work</h1>
            <div class="containercard">
              <div class="projects-grid">
                {/* <!-- Project Card --> */}
                <div class="project-card">
                  <div class="image-wrapper">
                    <div class="image-overlay"></div>
                    <div class="image-gradient"></div>
                    <div class="card-content">
                      <h3 class="project-title">Project Title</h3>
                      <div class="tags">
                        <span class="tag">Python</span>
                        <span class="tag">Django</span>
                        <span class="tag">PostgreSQL</span>
                      </div>
                      <p class="description">
                        to whomever it may concern this is the description of
                        the project and the details of Nithishhhhh
                        Adhiiiiiiiiiiiii
                      </p>
                      <a href="#" class="learn-more">
                        Learn More
                        <svg
                          class="arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            d="M14 5l7 7-7 7M3 12h18"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Project Card --> */}
                {/* <!-- Project Card --> */}
                <div class="project-card">
                  <div class="image-wrapper">
                    <div class="image-overlay"></div>
                    <div class="image-gradient"></div>
                    <div class="card-content">
                      <h3 class="project-title">Project Title</h3>
                      <div class="tags">
                        <span class="tag">Python</span>
                        <span class="tag">Django</span>
                        <span class="tag">PostgreSQL</span>
                      </div>
                      <p class="description">
                        to whomever it may concern this is the description of
                        the project and the details Nithishhhhh Adhiiiiiiiiiiiii
                      </p>
                      <a href="#" class="learn-more">
                        Learn More
                        <svg
                          class="arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            d="M14 5l7 7-7 7M3 12h18"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Project Card --> */}
                {/* <!-- Project Card --> */}
                <div class="project-card">
                  <div class="image-wrapper">
                    <div class="image-overlay"></div>
                    <div class="image-gradient"></div>
                    <div class="card-content">
                      <h3 class="project-title">Project Title</h3>
                      <div class="tags">
                        <span class="tag">Python</span>
                        <span class="tag">Django</span>
                        <span class="tag">PostgreSQL</span>
                      </div>
                      <p class="description">
                        to whomever it may concern this is the description of
                        the project and the details Nithishhhhh Adhiiiiiiiiiiiii
                      </p>
                      <a href="#" class="learn-more">
                        Learn More
                        <svg
                          class="arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            d="M14 5l7 7-7 7M3 12h18"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Project Card --> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="footer-container">
        <footer className="footer">
          <h1>
            © 2025 Nithish Adhi| Created by Nithish Adhi. Look at some of my
            projects on GitHub <br />
            <a href="https://github.com/NithishAdhi">NithishAdhi</a>
          </h1>
        </footer>
      </div>
    </div>
  );
}
