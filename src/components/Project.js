import React from "react";
import Dashboard from "../assets/Dashboard.png";
import Curate from "../assets/Curate.png";
import Locator from "../assets/Locator.png";


const projects = [
    {
      img: Curate,
      title: "Curate.io",
      desc: "MERN Stack application to curate reads.",
      live: "https://curator-io.onrender.com/",
      code: "https://curator-io.onrender.com/#/home",
    },
    {
      img: Dashboard,
      title: "User Dashboard",
      desc: "Frontend Admin Dashboard with Weather Forecast",
      live: "https://dosacat.github.io/UserDashboard/",
      code: "https://github.com/dosacat/UserDashboard",
    },
    {
      img: Locator,
      title: "Find Me Game",
      desc: "Mobile Responsive React based Game with Firebase Backend",
      live: "https://dosacat.github.io/Locator/",
      code: "https://github.com/dosacat/Locator",
    },
  ]; 


const Projects = () => {

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#b2102f] pb-2">
            Projects
          </h2>

          <p className="pb-5">
            This is some of my recent work:
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative " key={i}>
              <img src={project.img} alt={project.title} className="object-cover h-80 w-96 rounded-lg"/>
              <div className="max-sm:mx-4 mx-8 flex rounded-lg  justify-center items-center absolute top-0 right-0 left-0 bottom-0 my-5 w-[80%] h-[80%]  bg-[#aa2e25]  opacity-0 duration-500 flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-pink-500 hover:bg-pink-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-rose-500 hover:bg-rose-600 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
