import React from "react";
import {AiFillGithub} from "react-icons/ai";

const Footer = () => {
  return <div className="flex py-4 px-10 text-center bg-primary text-white text-xl"><a className="flex items-center pr-4 inline-block text-accent hover:text-white" href="https://github.com/dosacat"><AiFillGithub size={35}/> dosacat </a>
  </div>;
};

export default Footer;
