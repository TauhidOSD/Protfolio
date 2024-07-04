import { useEffect, useState } from "react";
import {  Link, useLoaderData, useParams } from "react-router-dom";

import useTitle from "../../hooks/useTitle";

const Details = () => {
  useTitle('Project Details');

  const [data, setData] = useState({})

  const { bookId } = useParams();

  const details = useLoaderData();

  useEffect(() => {
      const findCart = details?.find((item) => item.bookId === bookId);

      setData(findCart);
  }, [bookId, details]);
 

  console.log(data);

 
  return (
    
    <div className="min-h-screen">
      <section className="bg-gray-800 text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                   <div>
                    <img src={data.img1} alt="" />
                   </div>
                
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={data.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-2xl font-bold leading-none sm:text-5xl">{data.bookName}
                        <h1 className="text-xl font-bold leading-none sm:text-xl mt-1">By : {data.author} </h1>

                        <h1 className="text-xl font-bold leading-none sm:text-xl mt-1">{data.category}</h1>

                    </h1>
                    <p className="mt-2  text-lg sm:mb-8"><span className="text-xl font-bold">Review :</span> {data.review}

                    </p>
                    <div className="flex justify-around ">
                        <a className="text-xl font-bold">Tag </a>

                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#23BE0A] bg-[#23BE0A0D] p-2 px-4 rounded-xl">{data.bookName}</a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#23BE0A] bg-[#23BE0A0D] p-2 px-4 rounded-xl">{data.publisher}</a>

                    </div>
                    <div className="mb-6">
                        <h1 className="mt-3 "><span className="text-xl font-bold" > Number of Pages :</span>  {data.totalPages}</h1>
                        <h1 className="mt-3 "><span className="text-xl font-bold" >Publisher:</span> Publisher : {data.publisher}</h1>
                        <h1 className="mt-3 "><span className="text-xl font-bold" >Year of Publishing :</span>  {data.yearOfPublishing}</h1>
                        <h1 className="mt-3 "><span className="text-xl font-bold" >Rating : </span> {data.rating}</h1>
                    </div>

                    <Link to={data.live_link}>
                    <button>Live</button>
                    </Link>


                  
                </div>
            </div>
        </section>
    </div>
  );
};

export default Details;


// import { useEffect, useState } from "react";
// import { Link, useLoaderData, useParams } from "react-router-dom";
// import Slider from "../../Components/Slider/Slider";
// import Feature from "../../Components/Feature/Feature";
// import { SiSymantec } from "react-icons/si";
// import { FaArrowRight, FaGithub, FaSpinner } from "react-icons/fa";
// import useTitle from "../../hooks/useTitle";
// // import useTitle from "../../hooks/useTitle";

// const Details = () => {
//   // const [data, setData] = useState({})

//   // const { bookId } = useParams();

//   // const details = useLoaderData();

//   // useEffect(() => {
//   //     const findCart = details?.find((item) => item.bookId === bookId);

//   //     setData(findCart);
//   // }, [bookId, details]);
//   useTitle('Project Details');
//   const { id } = useParams();
//   const [loader, setLoader] = useState(true);
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch(`https://rean-portfolio-server.vercel.app/projects/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoader(false);
//       });
//   }, [id]);

//   console.log(data);

//   const Technology = ({ f }) => {
//     console.log(f);
//     return (
//       <div className="flex flex-row p-6 rounded-[20px] feature-card mt-5">
//         <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-dimBlue">
//           <SiSymantec size={23} className="text-white"></SiSymantec>
//         </div>
//         <div className="flex-1 flex flex-col ml-3">
//           <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
//             {f}
//           </p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
      
//         <div className="flex items-center justify-center h-32">
//           <FaSpinner className="animate-spin text-white text-4xl" />
//         </div>
      
//         <div>
//           <div className="mt-24">
//           <Slider data={data}></Slider>

//           </div>
//           {/* buttons */}
//           <div className="flex flex-wrap gap-5 md:ml-[480px] mt-10">
//             <Link to={data?.live_link}>
//               <button className=" btn btn-sm  bg-purple-100 flex items-center">
//                 View-Site <FaArrowRight className="ml-1" />
//               </button>
//             </Link>
//             <Link to={data?.client_link}>
//               <button className=" btn btn-sm bg-purple-100 flex items-center">
//                 Client Site <FaGithub className="ml-1" size={23} />
//               </button>
//             </Link>
//             <Link to={data?.server_link}>
//               <button className=" btn btn-sm bg-purple-100 flex items-center">
//                 Server Site <FaGithub className="ml-1" size={23} />
//               </button>
//             </Link>
//           </div>

//           {/* technology */}
//           <p className="text-5xl font-bold text-white my-10">Technology Used</p>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-5 ml-3">
//             {data?.technology?.map((f, i) => (
//               <Technology key={i} f={f}></Technology>
//             ))}
//           </div>

//           {/* feature */}
//           <p className="text-5xl font-bold text-white my-10">Feature</p>
//           <div>
//             {data?.feature?.map((f,i ) => (
              
//               <Feature key={i} f={f}></Feature>
//             ))}
//           </div>
//         </div>
      
//     </>
//   );
// };

// export default Details;
