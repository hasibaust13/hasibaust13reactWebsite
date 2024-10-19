import React from "react";
import { useState } from "react";
import b1 from "../assets/blog/deep.png";
import b2 from "../assets/blog/robotics.png";
import b3 from "../assets/blog/biomed.png";
import HigherStudy from "../blogs/HigherStudy";
import ErasmusIfros from "../blogs/ErasmusIfros";
import CareerAdv from "../blogs/CareerAdvForCs";

const Blog = () => {
  const [activeComponent, setActiveComponent] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "hs":
        return <HigherStudy />;
      case "ei":
        return <ErasmusIfros />;
      case "cs":
        return <CareerAdv />;

      default:
        return null;
    }
  };

  const handleButtonClick = (component) => {
    setIsVisible(false);

    setActiveComponent(component);
  };

  const blogs = [
    {
      title:
        "Deep-Learning is the future",
      desc: "Details 1",
      link: "higher-studies-abroad",
      img: b1,
      sf: "hs",
    },
    {
      title:
        "Robotics",
      desc: "Details 2",
      link: "path-to-erasmus-masters",
      img: b2,
      sf: "ei",
    },
    {
      title: "Biomedical",
      desc: "Details 3",
      link: "beyond-the-trends",
      img: b3,
      sf: "cs",
    },
  ];
  return (
    <div>
      <header>
        <h2 class="h2 article-title">Blogs</h2>
      </header>
      <section class="timeline">
        {renderActiveComponent()}
        {isVisible ? (
          <div class="cards">
            {blogs.map((blog) => (
              <div class="card">
                <a
                  className="blog-link img-thumbd"
                  onClick={() => handleButtonClick(blog.sf)}
                >
                  <img src={blog.img} className="img-thumb" alt={blog.title} />
                  <div class="card-item">
                    <div class="title hover-link">{blog.title}</div>
                    <div class="year">{blog.desc}...</div>
                    <div className=""></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default Blog;
