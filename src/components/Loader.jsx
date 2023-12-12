import React from "react";
import Lottie from "lottie-react";
import AnimationRecicle from "../assets/AnimationRecicle.json";

const Loader = () => {
  return (
    <div className="fixed flex-col items-center p-2 mt-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg top-1/2 left-1/2">
      <div className="flex justify-center w-26 h-26">
        <Lottie animationData={AnimationRecicle} loop={true} width={20} height={20}/>
      </div>
      <p className="m-4 text-gray-900 text-3xl font-Montserrat">
        Did you know?
        <br />
        Yodo can assist you in offsetting your carbon emissions
      </p>
    </div>
  );
};

export default Loader;
