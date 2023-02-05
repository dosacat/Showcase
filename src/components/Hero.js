import React from "react";
import HeroImg from "../assets/hero-img.jpg";


const Hero = () => {
    
  return (
    <section className="flex bg-primary px-10 text-neutral-900 font-semibold py-32 max-md:flex-col">
      <div className="container mx-auto grid md:grid-cols-1 items-center justify-center md:justify-between w-2/3">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="items-center justify-center justify-between text-xl lg:text-4xl">
            Hi, <br /> 
            I'm a former Bosch engineer <br />
            turned software developer.
          </h1>

          <p className="py-5 text-xl text-white font-light">
            Skilled in Full Stack, I'm looking to build with fast growing tech startups.
          </p>

        </div>

      </div>
      <div className="hero-img">
          <img
            src={HeroImg}
            alt="ripple art"
            className="lgw-[100%] md:ml-auto mr-40 transition ease-in-out delay-150" />
        </div>

    </section>
  );
};

export default Hero;
