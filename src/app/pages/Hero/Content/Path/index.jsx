"use client";
import Image from "next/image";
import React from "react";
import BackgroudImage from "../../../../../../public/Assets/background.png";

function Plane() {
  return (
    <div className="h-[547px] w-[1200px] relative">
      
      <div
        className="absolute top-0 left-0 w-full h-[547px]"
        style={{
          background: "rgb(50,28,60)", 
          background:
            "linear-gradient(90deg, rgba(50,28,60,0.992) 0%, rgba(40,22,48,1) 3%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 49%, rgba(19,3,32,1) 70%, rgba(0,39,86,1) 100%)",
          zIndex: 0, // Behind the image
        }}
      ></div>

      {/* Image */}
      <div className="relative w-full h-full z-10"> {/* Ensuring it covers the container */}
        <Image
          src={BackgroudImage}
          alt="Mountain Background"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image covers the container without distortion
          quality={100}
        />
      </div>

      {/* Text at the bottom of the image */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Your Text Here</h1>
        <p>Your additional text goes here.</p>
      </div>
    </div>
  );
}

export default Plane;
