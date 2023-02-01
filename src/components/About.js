import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container  mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            I saved my team at Bosch time and money with a python program I wrote to find the 
            worst performing manufacturing processes. I'm now looking to transcend into fast growing startups in software, 
            analytics or customer success roles. 
            
          </p>
          <p className="pb-5">
            On the <span className="text-pink-600 font-bold">Frontend</span>, I can style interfaces with Global CSS, JavaScript Library (React) with Component Library (Material UI)
            CSS-Preprocessor (SASS), Utility Class Libraries (Tailwind) or CSS Frameworks (Bootstrap). I have also consumed several public apis with axios to present information.

            
          </p>

          <p>On the <span className="text-amber-400 font-bold">Backend</span> I have built projects with Node.js, Express.js, Django and databases such as MongoDB and Relational Databases.</p>
          <br></br>
          <p>
            When I'm not programming, you will find me playing a sport or petting stray cats.
          </p>
        </div>

        <div className="about-img"> 
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto mr-5"
          />
         </div> 
      </div>
    </section>
  );
};

export default About;
