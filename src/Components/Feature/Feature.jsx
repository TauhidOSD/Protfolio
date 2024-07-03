import {FaHandPointRight} from "react-icons/fa"

import styles from "../../styles/styles";
const Feature = ({f}) => {
    return (
        <div>
           
            <div className="flex flex-row p-6 rounded-[20px] feature-card mt-5">
                <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>

                <FaHandPointRight size={23} className="object-contain w-[50%] text-white"></FaHandPointRight>
                </div>
                <div className="flex-1 flex flex-col ml-3">
      
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {f}
      </p>
    </div>
            </div>
        </div>
    );
};

export default Feature;