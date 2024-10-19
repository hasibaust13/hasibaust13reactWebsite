import React from "react";
import { useState } from "react";
import b3 from "../assets/blog/biomed.png";
import Getsop from "./Getsop";
import Rbtn from "./Rbtn";

const CareerAdv = () => {
  const blog = {
    title: "",
    desc: "",
    link: "beyond-the-trends",
    img: b3,
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
  {/* <b>Understanding the Requirements:</b>  */}
  
  
</p>
<p>
  {/* <b>Academic Excellence as a Foundation:</b>  */}
  
  
  
</p>
<p>
  {/* <b>Crafting a Compelling SOP and Gathering Strong LoRs:</b>  */}
  
  

</p>
<p>
  {/* <b>Organized CV - A Reflection of Achievements:</b> */}
  
</p>
{/* <p>
  <b>IELTS, Medium of Instruction, and Other Considerations:</b> While having an IELTS score was advantageous, I discovered that applying with the medium of instruction was also acceptable. I weighed these factors carefully in my preparation to ensure my application was comprehensive and met all criteria set by IFRoS.
  
</p> */}
{/* <p>
  <b>The Application Journey:</b> Having prepared all the necessary documents, I submitted my application. Initially, I was on the waiting list, but perseverance paid off as I later secured a spot on the main list. To my delight, I received the prestigious Erasmus Mundus scholarship, a significant milestone in my academic journey.
  
</p>
<p>
  <b>Current Status and Closing Words:</b> As of now, I have completed three semesters in the Erasmus Masters program and eagerly await the commencement of my thesis. To those considering applying for similar programs, I advise understanding the requirements thoroughly, presenting a solid academic profile, crafting compelling documents, and persevering through the application process. Good luck to all aspiring scholars – the journey is worth every effort!
  
</p> */}
</div>
    {/* <br /> */}
{/* <h2>Conclusion</h2> */}
{/* <br /> */}


<br/>
<br/>

<Rbtn pid="b2"/>
          
          <Getsop />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerAdv;
