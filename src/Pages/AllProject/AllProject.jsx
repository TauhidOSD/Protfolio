import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

// import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ProjectCard from "../../Shared/ProjectCard/ProjectCard";

const AllProject = () => {
  useTitle('All Project')
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("fakr.json")
      .then((res) => res.json())
      .then((data) => setData(data));
    setLoader(false);
  }, []);

  


  return (
    <>
      {loader ? (
        <div className="flex items-center justify-center h-32">
          <FaSpinner className="animate-spin text-white text-4xl" />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 mt-36  gap-5">
          {data?.map((pd) => (
            <ProjectCard key={pd?.bookId} pd={pd}></ProjectCard>
          ))}
        </div>
      )}
      
    </>
  );
};

export default AllProject;
