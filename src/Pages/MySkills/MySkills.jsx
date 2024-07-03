import { BiLogoFigma } from "react-icons/bi";
import {
  FaReact,
  FaGithub,
  FaStripe
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Education from "../Home/Home/Education/Education";

const MySkills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <div>
      <div id="skills" className="mt-[85px] container mb-10 mx-auto px-2 sm:px-4 lg:px-1">
        <p className="text-4xl font-bold text-center text-white mb-5 mt-10">
          My Skills
        </p>
        <h1 className="font-5xl font-poppins font-extrabold border-b-8 border-dimBlue text-white mb-10"></h1>

        

        <div className="">
          {/* Slider for smaller screens */}
          <Slider {...settings}>
          <SkillCard icon={<FaReact size={40} className="object-contain w-[50%] text-blue-800" />} title="React" />
               <SkillCard icon={<SiJavascript size={40} className="object-contain w-[50%] text-yellow-500" />} title="Java-Script" />
              <SkillCard icon={<DiNodejs size={40} className="object-contain w-[50%] text-green-800" />} title="NodeJS" />
                 <SkillCard icon={<SiExpress size={40} className="object-contain w-[50%] text-white" />} title="ExpressJS" />
                <SkillCard icon={<SiHtml5 size={40} className="object-contain w-[50%] text-orange-600" />} title="HTML5" />
                <SkillCard icon={<IoLogoCss3 size={40} className="object-contain w-[50%] text-blue-500" />} title="CSS" />
                 <SkillCard icon={<SiTailwindcss size={40} className="object-contain w-[50%] text-blue-800" />} title="Tailwind" />
                 <SkillCard icon={<SiMongodb size={40} className="object-contain w-[50%] text-green-800" />} title="MongoDB" />
                 <SkillCard icon={<SiFirebase size={40} className="object-contain w-[50%] text-amber-500" />} title="Firebase" />
        
                 <SkillCard icon={<BiLogoFigma size={50} className="object-contain w-[50%] text-purple-900" />} title="Figma" />
                 <SkillCard icon={<FaGithub size={50} className="object-contain w-[50%] text-white" />} title="GitHub" />
                 <SkillCard icon={<FaStripe size={50} className="object-contain w-[50%] text-purple-500" />} title="Stripe" />
          </Slider>
        </div>
      </div>

      <Education />
    </div>
  );
};

const SkillCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg feature-card mt-2 ">
      <div className="w-[40px] h-[30px] rounded-full flex items-center justify-center ">
        {icon}
      </div>
      <div className="flex-1 flex flex-col mt-3">
        <p className="font-poppins font-normal text-dimWhite text-[12px]  leading-[20px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default MySkills;





// import { FaReact, FaGithub, FaStripe } from "react-icons/fa";
// // import Lottie from "lottie-react";
// // import animate from "../../assets/Animation - 1702402205342.json";
// // 
// import {
//   SiTailwindcss,
//   SiHtml5,
//   SiExpress,
//   SiMongodb,
//   SiFirebase,
//   SiJavascript,

// } from "react-icons/si";

// import { IoLogoCss3 } from "react-icons/io";
// import { DiNodejs } from "react-icons/di";
// import Education from "../Home/Home/Education/Education";
// // import { BiLogoFigma } from "react-icons/bi";

// const MySkills = () => {
//   return (
//       <div>
        
//             <div id="skills" className=" mt-[85px] container mb-10 mx-auto px-2 sm:px-4 lg:px-1">
//               <p className="text-4xl font-bold text-center text-white mb-5 mt-10">
//                 My Skills
//               </p>
//               <h1 className="font-5xl font-poppins font-extrabold border-b-8 border-dimBlue text-white mb-10"></h1>
        
//               {/* <div
//             id="about"
//             className="xl:mt-12 flex md:flex-row flex-col gap-10 overflow-hidden"
//           > */}
        
//               {/* <div className="text-center md:mt-16 mt-1 md:w-5/12">
//                   <Lottie
//                     className=""
//                     animationData={animate}
//                     loop={true}
//                     height={100}
//                     width={100}
//                   />
//                 </div> */}
        
//               <div className="flex flex-wrap gap-y-6 gap-x-6 justify-center" data-aos="zoom-in" data-aos-duration="1000">
//                 <SkillCard icon={<FaReact size={40} className="object-contain w-[50%] text-blue-800" />} title="React" />
//                 <SkillCard icon={<SiJavascript size={40} className="object-contain w-[50%] text-yellow-500" />} title="Java-Script" />
//                 <SkillCard icon={<DiNodejs size={40} className="object-contain w-[50%] text-green-800" />} title="NodeJS" />
//                 <SkillCard icon={<SiExpress size={40} className="object-contain w-[50%] text-white" />} title="ExpressJS" />
//                 <SkillCard icon={<SiHtml5 size={40} className="object-contain w-[50%] text-orange-600" />} title="HTML5" />
//                 <SkillCard icon={<IoLogoCss3 size={40} className="object-contain w-[50%] text-blue-500" />} title="CSS" />
//                 <SkillCard icon={<SiTailwindcss size={40} className="object-contain w-[50%] text-blue-800" />} title="Tailwind" />
//                 <SkillCard icon={<SiMongodb size={40} className="object-contain w-[50%] text-green-800" />} title="MongoDB" />
//                 <SkillCard icon={<SiFirebase size={40} className="object-contain w-[50%] text-amber-500" />} title="Firebase" />
        
//                 {/* <SkillCard icon={<BiLogoFigma size={50} className="object-contain w-[50%] text-purple-900" />} title="Figma" /> */}
//                 <SkillCard icon={<FaGithub size={50} className="object-contain w-[50%] text-white" />} title="GitHub" />
//                 <SkillCard icon={<FaStripe size={50} className="object-contain w-[50%] text-purple-500" />} title="Stripe" />
        
//               </div>
        
        
        
//             </div>
        
        
        
//             {/* // </div> */}

//                   <Education/>
//       </div>

    


//   );
// };

// const SkillCard = ({ icon, title }) => {
//   return (
//     <div className="flex flex-col items-center justify-center p-4 rounded-lg feature-card mt-2 ">
//       <div className="w-[40px] h-[30px] rounded-full flex items-center justify-center ">
//         {icon}
//       </div>
//       <div className="flex-1 flex flex-col mt-3">
//         <p className="font-poppins font-normal text-dimWhite text-[12px]  leading-[20px]">
//           {title}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MySkills;
