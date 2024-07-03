
import img from "../../../../assets/Banner/image.png";

const Hero = () => {
  return (
    <div className="relative w-full mb-0 mt-28">
      <img
        src={img}
        alt="banner"
        className="w-full h-auto object-cover"
        style={{ maxHeight: "560px" }}
      />
      {/* <div className="  absolute    bottom-0 right-0 ">
        <a href={resume} download={resume}>
          <button className=" block md:hidden btn btn-outline btn-sm    "> 
            <span className="text-black text-xs  font-serif ">
              Download  Resume
            </span>
           
          </button>
        </a>
      </div>  */}
    </div>
  );
};

export default Hero;
