import React from "react";
import dlr from "../assets/images/deep-learning.png";
import mlr from "../assets/images/classification.png";
import robotics from "../assets/images/robot.png";
import healthai from "../assets/images/innovation.png";
import aust from "../assets/images/aust.png";
import iemcon from"../assets/images/iemcon.png"
import hcis from"../assets/images/HCIS.png"
import icpc from"../assets/images/ICPC.png"
import brac from"../assets/images/BRAC.png"

const About = () => {
  const awards = [
    {
      title: "Best Paper Award",
      desc: "IEEE Annual Information Technology, Electronics and Mobile Communication Conference - IEMCON (2021)",
      img: iemcon,
    },
    {
      title: "Best Paper Award",
      desc: "Human-Centric Intelligent Systems Journal (2022)",
      img: hcis,
    },
    {
      title: "Honorable Mention - Coach",
      desc: "ICPC Asia Dhaka Regional Contest (2021)",
      img: icpc,
    },
    {
      title: "Merit-Based Scholarship",
      desc: "BRAC University (2021)",
      img: brac,
    }
  ];
  
  return (
    <div>
      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>
          I am <b>Khan Md Hasib</b>, currently on pursuing my PhD at The
          University of Western Australia. I'm also an Assistant Professor in
          the Department of Computer Science & Engineering at Bangladesh
          University of Business and Technology (BUBT). I hold an MSc in
          Computer Science from BRAC University and a BSc from Ahsanullah
          University of Science and Technology. My research primarily focuses on
          machine learning, deep learning, and AI applications in health, social
          networks, and robotics. I have several publications in reputable
          journals and have received awards for my research contributions,
          including two best paper awards.
        </p>
      </section>

      <section class="service">
        <h3 class="h3 service-title">What i'm doing</h3>

        <ul class="service-list">
          <li class="service-item">
            <div class="service-icon-box">
              <img
                src={dlr}
                alt="design icon"
                className="text-yellow"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Deep Learning</h4>

              <p class="service-item-text">
                Implementing deep learning and computer vision, with major
                accomplishments in creating intelligent systems such as
                AlzheimerNet for brain picture categorization.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src={mlr}
                alt="design icon"
                className="text-yellow"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Machine Learning</h4>

              <p class="service-item-text">
                Exploring machine learning techniques for data imbalance, text
                classification, and social network analysis, including
                depression detection.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src={robotics}
                alt="design icon"
                className="text-yellow"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Robotics & AI</h4>

              <p class="service-item-text">
                Working on human-robot interaction and automatic place
                recognition for robots in varying conditions.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src={healthai}
                alt="design icon"
                className="text-yellow"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">HealthTech AI</h4>

              <p class="service-item-text">
                Focusing on medical image analysis for diseases like Alzheimer's
                and skin cancer.
              </p>
            </div>
          </li>
        </ul>
      </section>
      {/*
      
      */}
      <section class="testimonials">
        <h3 class="h3 testimonials-title">Academic Involvements</h3>

        <ul class="testimonials-list has-scrollbar">
          <li class="testimonials-item">
            <div class="content-card unicard" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  class="rounded-img"
                  src={brac}
                  alt="BRAC"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>
                BRAC University, Bangladesh
              </h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  <b>Master of Science in Computer Science</b>
                </p>
              </div>
            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card unicard" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  class="rounded-img"
                  src={aust}
                  alt="AUST"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>
                Ahsanullah University of Sciene and Technology, Bangladesh
              </h4>

              <div class="testimonials-text" data-testimonials-text>
                <b>B.Sc. in Computer science and engineering</b>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section class="clients">
        <h3 class="h3 clients-title">Speeches, Honors, Awards</h3>

        <ul class="clients-list has-scrollbar speech text-gray">
          {awards.map((award) => (
            <li class="testimonials-item">
              <div class="content-card unicard" data-testimonials-item>
                <figure class="testimonials-avatar-box">
                  <img
                    class="rounded-img"
                    src={award.img}
                    alt={award.title}
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>
                <div class="testimonials-text" data-testimonials-text>
                  <h4
                    class="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    {award.title}
                  </h4>{" "}
                  {award.desc}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
