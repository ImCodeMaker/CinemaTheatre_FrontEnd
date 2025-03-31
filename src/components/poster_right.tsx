import React from "react";
import { posterProps } from "@/interfaces/posterProprs";

const Posters: React.FC<posterProps> = ({ title, description, image }) => {
  return (
    <div className="flex justify-center items-center min-h-screen space-x-10 px-10">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>
        <p className="text-lg font-semibold mt-8 text-white">
          {description}
        </p>
        <button className="flex justify-center items-center h-12 w-32 bg-black mt-4 mx-auto drop-shadow-xl hover:bg-gray-800 rounded-2xl">
          <span className="text-white font-semibold cursor-pointer ">Click here!</span>
        </button>
      </div>
      <img
        src={image.src}
        className="h-96 w-[600px] object-cover rounded-b-md drop-shadow-xl"
      />
    </div>
  );
};

export default Posters;
