import { Link, NavLink } from "react-router-dom";
// import { AiOutlineArrowRight } from "react-icons/ai";
import resume from "../../src/assets/file/resume/Resume_Rezuan Alam Rean.pdf";

const Navbar = () => {
  const navRoutes = (
    <>
      <li className="md:text-white font-poppins cursor-pointer">
        <NavLink className="font-bold hover:text-blue-700" to="/">Home</NavLink>
      </li>
      <li className="md:text-white font-poppins cursor-pointer">
        <NavLink to="/project" className="font-bold hover:text-blue-700">Projects</NavLink>
      </li>
      <li className="md:text-white font-poppins cursor-pointer">
        <NavLink to="/skills" className="font-bold hover:text-blue-700">My Skills</NavLink>
      </li>
      <li className="md:text-white font-poppins cursor-pointer">
        <NavLink to="/contact" className="font-bold hover:text-blue-700">Contact</NavLink>
      </li>
      <li className="md:text-white font-poppins cursor-pointer">
        <NavLink to="/about" className="font-bold hover:text-blue-700">About</NavLink>
      </li>
      {/* <li className="md:text-white font-poppins cursor-pointer">
        <NavLink to="/allProject" className="font-bold hover:text-blue-700">All Project</NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar  bg-slate-900 w-full fixed z-30 top-0 left-0 py-5 shadow-sm">

      {/* Navbar start with dropdown */}
      <div className="navbar-start">
        
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-purple-100 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            
           {navRoutes}
          </ul>
        </div>

        <Link to="/">
        <div>
          <p className=" hidden lg:block  text-2xl ml-10 text-white font-extrabold">
            Rezuan<span className="text-pink-600">Rean</span>
          </p>
        </div>
      </Link>

        
      </div>

      
      <Link to="/">
        <div>
          <p className=" lg:hidden text-2xl  ml-10 text-white font-extrabold">
            Rezuan<span className="text-pink-600">Rean</span>
          </p>
        </div>
      </Link>

      {/* Navbar menu for larger screens */}
      <div className="navbar-center hidden lg:flex text-black">
        <ul className="menu menu-horizontal px-1 font-poppins cursor-pointer">
          {navRoutes}
        </ul>
      </div>

      {/* Navbar end for Resume Download Button */}
      <div className="navbar-end ">
        {/* Responsive Resume Download Button */}
        <a href={resume} download={resume}>
  <button className="  btn-sm   btn ml-2 bg-purple-100 ">
    <span className="text-black  font-bold">
      Download Resume
    </span>
    
  </button>
</a>

      </div>
    </div>
  );
};

export default Navbar;