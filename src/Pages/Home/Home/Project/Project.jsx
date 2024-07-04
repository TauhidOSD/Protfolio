import { useEffect, useState } from "react";
import ProjectCard from "../../../../Shared/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import useTitle from "../../../../hooks/useTitle";


const Project = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('fakr.json')
            .then(res => res.json())
            .then(data => setData(data))
        setLoader(false)
    }, [])
    console.log(data);
    useTitle('project')
    return (
        <>

            {loader ?
                <div className="flex items-center justify-center h-32">
                    <FaSpinner className="animate-spin text-white text-4xl" />
                </div>
                : <div  id="project">
                    <p className="text-4xl font-bold text-center text-white mb-5 mt-10">
                        My Projects
                    </p>
                    <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimBlue text-white mb-10"></h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            data?.slice(0, 3).map(pd => <ProjectCard key={pd?.bookId} pd={pd}></ProjectCard>)
                        }
                    </div>
                    <div className="text-right mr-3 mt-10">
                        <Link to={"/allProject"}><button className="btn btn-sm text-black bg-purple-100">VIEW All Project</button></Link>
                    </div>
                </div>}

        </>
    );
};

export default Project;