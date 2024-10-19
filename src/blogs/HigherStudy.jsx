import React from "react";
import { useState } from "react";
import j1 from "../assets/blog/deep.png";
import Getsop from "./Getsop";
import ReactionButton from "./ReactionButton";
import Rbtn from "./Rbtn";

const Blog = () => {
  const blog = {
    title: "",
    desc: "",
    link: "higher-studies-abroad",
    img: j1,
  };
  return (
    <div>
      <header>
        <h2 class="h2 post-title">{blog.title}</h2>
      </header>
      <section class="timeline">
        <div>
          <div className="bimg">
            <img className="bimg" src={blog.img} alt={blog.title} />
          </div>
          {/* prettier-ignore */}
          <div class="post-body">
          {/* <h2>Introduction</h2>
          <br /> */}


<br /><br />
<div className="lists">


    <p>
      
    </p>
    <p>
     
    </p>
    <p>
     
    </p>
    <p>
     
    </p>
    <p>
     
    </p>
    <p>
     
    </p>
    <p>
      
    </p>
    <p>
     
    </p>
    <p>
          
    </p></div>
    {/* <br /> */}
{/* <h2>Conclusion</h2> */}
{/* <br /> */}

<Rbtn pid="b1"/>
          <div>
            <Getsop />
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
