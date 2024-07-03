import { Link } from "react-router-dom";

const ProjectCard = ({ pd }) => {
  const { _id, name, type, image } = pd;
  return (
    <div
      className="rounded-lg group text-white font-poppins bg-slate-800 shadow-lg overflow-hidden"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <img className="w-full group-hover:scale-95" src={image[0].img1} alt={name} />
      <div className="p-3  flex flex-col justify-between my-3 lg:my-5">
        <div>
          <h2 className="card-title text-lg lg:text-xl xl:text-2xl font-bold mb-1">{name}</h2>
          <p className="font-bold text-sm lg:text-base text-gray-300">{type}</p>
        </div>
        <div className="flex justify-center mt-3 lg:mt-5">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-sm bg-purple-100 text-black ">
              <span className="text-sm lg:text-base">View Details</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
