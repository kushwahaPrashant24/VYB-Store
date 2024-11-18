import React from "react";

export default function Creator() {
  return (
    <div className="w-[1200px] h-[748px]  flex justify-center items-center ">
      <div className=" h-[144px] w-[438px] text-[#00DC82] text-[40px] font-bold">
        From Creation to Monetization: Vyb Store Has It All
      </div>
      <div className=" w-[726px] h-[748px] flex gap-[16px]  ">
        <div className="h-[748px] w-[355px] flex flex-col gap-[16px] ">
          <div className="h-[366px] w-[355px] bg-black rounded-[24px]  ">
            <div className="h-[134px] w-[307px] text-center flex flex-col gap-[8px]  ">
              <div className=" h-[82px] w-[307px]   ">
                <p className="text-[34px] font-bold text-center"> Trusted By Influencers</p> 
              </div>
              <div className=" h-[44px] w-[307px]  ">
               <p className="text-[18px] font-bold text-center">A trusted platform for influencers to grow and earn.</p> 
              </div>
            </div>
          </div>
          <div className="h-[366px] w-[355px]  bg-black rounded-[24px]"></div>
        </div>
        <div className="h-[723px] w-[355px] flex flex-col gap-[16px] justify-around ">
          <div className="h-[325px] w-[355px]  bg-black rounded-[24px]"></div>
          <div className="h-[325px] w-[355px]  bg-black rounded-[24px]"></div>
        </div>
      </div>
    </div>
  );
}
