import React from "react";
import { useState } from "react";
import b2 from "../assets/blog/robotics.png";
import Getsop from "./Getsop";
import Rbtn from "./Rbtn";

const Blog = () => {
  const blog = {
    title: "",
    desc: "",
    link: "higher-studies-abroad",
    img: b2,
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
  <b></b> 
  
</p>
<p>
  <b></b> 
  
</p>
<p>
  <b></b> 
</p>
<p>
  <b></b> 
  
</p>
<p>
  
  
</p>
<p>
 
</p>
<p>

  
</p>
</div>
    {/* <br /> */}
{/* <h2>Conclusion</h2> */}
{/* <br /> */}

<Rbtn pid="b2"/>
          
          <Getsop />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
