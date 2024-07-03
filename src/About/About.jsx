




/* eslint-disable react/no-unescaped-entities */
// import Lottie from "lottie-react";
// import animate from "../assets/Animation - 1702402205342.json";
import useTitle from "../hooks/useTitle";
import profile from "../assets/Banner/Rean Profile Pic 2.jpg"
import { Link } from "react-router-dom";

const About = () => {
  useTitle('About');

  return (
    <>
      <p className="text-4xl font-bold text-center text-white mb-5 mt-10">
        About Me
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8 border-dimBlue text-white mb-10"></h1>

      <div
        id="about"
        className="xl:mt-12 flex md:flex-row flex-col gap-10 overflow-hidden"
      >
        {/* Lottie Animation */}
        {/* <div className="text-center md:mt-16 mt-1 md:w-1/3">
          <Lottie
            className=""
            animationData={animate}
            loop={true}
            height={100}
            width={100}
          />
        </div> */}
        <div className="text-center md:mt-10 mt-1 max-w-xs m-auto">
          <img src={profile} alt="profile"/>
          
        </div>
        {/* Form */}
        <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl md:w-1/2 my-5">
          <div className="p-3 leading-6 ">
              <p className="text-4xl font-serif mb-5 text-white "> So , who am I ? </p>

            <p className="text-white font-poppins ">
             
              
              Hello ! I am Rezuan Alam rean. I am a Front-End Developer with a solid foundation in React,   JavaScript, html & CSS and familiar with  Node.js, Express and  MongoDB. I'm also  a student of  Computer Science and Engineering with a passion for coding. My Aim is to be a full-Stack Developer.
              I'm currently expanding my
              knowledge by learning Next.js to become a well-rounded full-stack
              developer.  I'm excited about learning new technologies and
              contributing to open-source projects. <br />Thank you .
            </p>
            < Link to="/Contact" >
              <button className="btn btn-sm text-black bg-purple-100 mt-4 md:mt-6">
                Contact Me
              </button>
            </ Link >
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
