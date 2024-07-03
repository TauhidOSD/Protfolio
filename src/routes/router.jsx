import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Details from "../Pages/Details/Details";
import AllProject from "../Pages/AllProject/AllProject";
import About from "../About/About";
import Contact from "../Pages/Contact/Contact";
import Project from "../Pages/Home/Home/Project/Project";
import MySkills from "../Pages/MySkills/MySkills";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element:  <Details></Details>,
        loader: ()=> fetch('fakr.json')
        
      },
      {
        path: "/allProject",
        element: <AllProject></AllProject>,
        
      },
      {
        path: "/about",
        element: <About/>,
        
      },
      {
        path: "/contact",
        element: <Contact/>,
        
      },
      {
        path: "/project",
        element: <Project/>,
        
      },
      {
        path: "/skills",
        element: <MySkills/> ,
        
      },
    ],
  },
]);

export default router;
