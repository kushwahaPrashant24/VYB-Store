import Image from "next/image";
import React from "react";
import Navbar from "../navbar";
import Login from "../../../../public/Assets/Login.png";
import GoogleLogo from "../../../../public/Assets/googlelogo.png";

export default function index() {
  

  return (
    <div className="flex flex-col justify-center items-center gap-[36px]">
      <Navbar />
      <div className=" h-[634.81px] w-[1,080px] max-w-[1080px] flex justify-between items-center bg-black p-10">
        <div>
          <Image src={Login} 
            className="w-[584px] h-[554.81px] "
          />
        </div>
        {/*Login */}
       
        <div className="w-[416px] h-[553px]  max-w-[420px] rounded-[16px] flex flex-col justify-center items-center  gap-[36px]  ">
        <center> <h1 className="h-[48px] w-[344px] text-[40px] font-bold ">Login</h1></center>
       
          {/* Google Sign-in */}
          <div className="w-[344px] max-h-[46px] border-2  px-[12px] py-[8px] rounded-[8px] flex justify-center items-center gap-[10px]  ">
            <div className="w-[215.2px] h-[22px] flex justify-center items-center gap-[4px]">
              <Image
                src={GoogleLogo}
                alt="Google"
                className="w-[20.45px] h-[19.71px] hover:scale-110 transition-all"
              />
              <p className="w-[113px] h-[18px] text-[13px] font-bold">
                Login with Google
              </p>
            </div>
          </div>
          {/* OR divider */}
          <div className="w-[180px] h-auto gap-0 flex justify-between items-center mt-3">
            <div className="h-[1px] w-[50%] bg-gray-300"></div>
            <p className="text-[18px] font-medium text-gray-500">OR</p>
            <div className="h-[1px] w-[50%] bg-gray-300"></div>
          </div>
          {/* Email Input */}
          <div className="w-[364px] h-auto  gap-[8px] border-b border-l-0 border-t-0 border-r-0 mt-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[46px] text-[14px] font-medium border-none outline-none bg-transparent text-white placeholder-white rounded-lg shadow-sm"
            />
          </div>
          {/* Another Input */}
          <div className="w-[364px] h-auto  gap-[8px] border-b border-l-0 border-t-0 border-r-0 mt-3">
            <input
              type="Password"
              placeholder="Password"
              className="w-full h-[46px] text-[14px] font-medium border-none outline-none bg-transparent text-white placeholder-white rounded-lg shadow-sm"
            />
          </div>
          {/* Login Button */}
          <button className="w-[142px] max-w-[142px] h-auto p-[12px_16px] gap-0 rounded-[12px] border-2 border-slate-100 font-medium text-[14px]  hover:scale-105 transition-all mt-4">
            Login
          </button>
          {/* Don’t have an account? */}
          <div className="w-[284px] h-[22px] opacity-100 flex items-center justify-center mt-3">
            <span className="w-[187px] text-[15px]">
              Don’t have an account?
            </span>
            <span className="w-[96px] text-green-500 text-[15px] cursor-pointer hover:underline">
              Get Started
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
