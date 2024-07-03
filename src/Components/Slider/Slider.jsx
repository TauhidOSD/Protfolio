import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Slider = ({data}) => {
//   console.log(data?.image[0]?.img1);
    return (
        <div >
            <Carousel >
         <div>
             <img className="max-h-96" src={data?.image[0]?.img1} />
          
            
         </div>
         <div>
             <img  className="max-h-96" src={data?.image[0]?.img2} />
       
            
         </div>
         <div>
             <img className="max-h-96" src={data?.image[0]?.img3} />
         
             
         </div>
         <div>
             <img className="max-h-96" src={data?.image[0]?.img4} />
       
            
         </div>
  
        
     </Carousel>  
        </div>
    );
};

export default Slider;