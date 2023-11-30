import React from "react";

const Loader = () => {
  return (
    <div className="fixed flex-col items-center p-2 mt-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg top-1/2 left-1/2">
      <div className="text-2xl w-18 h-18 animate-spin">♻️</div>
      <p className="m-4 text-gray-900">
        Did you know?
        <br />
        CO2 emissions contribute to climate change. Reduce, reuse, recycle!
      </p>
    </div>
  );
};

export default Loader;
