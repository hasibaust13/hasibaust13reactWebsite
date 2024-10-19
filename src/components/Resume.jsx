import React from "react";
import mmkresume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div>
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Academic Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Assistant Professor, Department of Computer Science and Engineering</h4>

            <span>2023 — Present </span>

            <p class="timeline-text">Bangladesh University of Business and Technology, Bangladesh</p>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">Skills & Interests</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Research Interest</h5>
              <data value="85">Deep learning, Machine learning, Computer vision, IoT, Robotics, Health&AI.</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Programming</h5>
              <data value="80">Python, Java, C/C++</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "90%",
                }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">ML-DL Tools</h5>
              <data value="85">TensorFlow, Pandas, PyTorch, NumPy, Matplotlib, ...</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "80%",
                }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Robotics Tools</h5>
              <data value="50">ROS, Val3 programming, MatLab, Gazebo, OMPL ...</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "70%",
                }}
              ></div>
            </div>
          </li>
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Databases</h5>
              <data value="60">Mysql, sqlite, Oracle ...</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "60%",
                }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
      {/*
      
            <section class="timeline" style={{ marginTop: "50px" }}>
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Selected Projects</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Real Time 2D Pose Estimation For Robot Parts Picking</h4>

            <span>2023</span>

            <p class="timeline-text">Computer vision project for robotic automation using Python and OpenCV.</p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Dynamic Object Detection using User Data</h4>

            <span>2021</span>

            <p class="timeline-text">AI-based web development project for object detection developed using JavaScript, Python, and TensorFlow.js</p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Android Application for Lunar Date Identiﬁcation</h4>

            <span>2020</span>

            <p class="timeline-text">AI-based android project for identifying lunar dates developed using Java, Python, and TensorFlowLite</p>
          </li>
        </ol>
      </section>
      
      
      */}


      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Conference Attendance</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title"> IEEE World AI IoT Congress (AIIoT)</h4>

            <span>2022</span>

            <p class="timeline-text">Washington, USA</p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">IEEE Region 10 Conference (TENCON)</h4>

            <span>2022</span>

            <p class="timeline-text">Hongkong, China</p>
          </li>

          
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Management and Leadership Skills</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Executive Member, AMIR Lab</h4>

            <span>2023 - Present</span>
          </li>
        </ol>
        <form action={mmkresume} method="get" target="_blank">
          <button href={mmkresume} class="btn btn-download-resume" style={{ marginTop: "50px" }}>
            Download Resume
          </button>
        </form>
      </section>
    </div>
  );
};

export default Resume;
