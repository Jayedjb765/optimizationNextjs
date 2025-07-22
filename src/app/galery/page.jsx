import Image from "next/image";
import React from "react";

const ImageOptimization = () => {
  return (
    <div>
      <h1 className="text-center">Regular Image</h1>
      <img
        src="https://i.ibb.co/XpPFyFh/Netflix.jpg"
        alt=""
        className="mx-auto"
      />
      <Image
        src="https://i.ibb.co/XpPFyFh/Netflix.jpg"
        alt=""
        className="mx-auto"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImageOptimization;
