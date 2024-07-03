import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Feature from "../../Components/Feature/Feature";
import { SiSymantec } from "react-icons/si";
import { FaArrowRight, FaGithub, FaSpinner } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Details = () => {
  useTitle('Project Details');
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://rean-portfolio-server.vercel.app/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  }, [id]);

  console.log(data);

  const Technology = ({ f }) => {
    console.log(f);
    return (
      <div className="flex flex-row p-6 rounded-[20px] feature-card mt-5">
        <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-dimBlue">
          <SiSymantec size={23} className="text-white"></SiSymantec>
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
            {f}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      {loader ? (
        <div className="flex items-center justify-center h-32">
          <FaSpinner className="animate-spin text-white text-4xl" />
        </div>
      ) : (
        <div>
          <div className="mt-24">
          <Slider data={data}></Slider>

          </div>
          {/* buttons */}
          <div className="flex flex-wrap gap-5 md:ml-[480px] mt-10">
            <Link to={data?.live_link}>
              <button className=" btn btn-sm  bg-purple-100 flex items-center">
                View-Site <FaArrowRight className="ml-1" />
              </button>
            </Link>
            <Link to={data?.client_link}>
              <button className=" btn btn-sm bg-purple-100 flex items-center">
                Client Site <FaGithub className="ml-1" size={23} />
              </button>
            </Link>
            <Link to={data?.server_link}>
              <button className=" btn btn-sm bg-purple-100 flex items-center">
                Server Site <FaGithub className="ml-1" size={23} />
              </button>
            </Link>
          </div>

          {/* technology */}
          <p className="text-5xl font-bold text-white my-10">Technology Used</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 ml-3">
            {data?.technology?.map((f, i) => (
              <Technology key={i} f={f}></Technology>
            ))}
          </div>

          {/* feature */}
          <p className="text-5xl font-bold text-white my-10">Feature</p>
          <div>
            {data?.feature?.map((f,i ) => (
              
              <Feature key={i} f={f}></Feature>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
