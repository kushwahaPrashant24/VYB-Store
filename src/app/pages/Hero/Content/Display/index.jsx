import React from 'react'

function Display() {
  return (
    <div
    className="relative w-[1200px] h-[540px] bg-cover bg-center rounded-[36px]"
    style={{
      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')", 
    }}
  >
    
    <div className="absolute inset-0  bg-opacity-50 "></div>

    {/* Centered Text */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
    <h1
          className="text-[180px] font-[700] leading-[216px] text-center"
          style={{
            fontFamily: "Urbanist",
            textDecorationSkipInk: "none",
          }}
        >
          TRAVEL
        </h1>
      <p
          className="text-[34px] font-[700] leading-[40.8px] text-center "
          style={{ fontFamily: "Urbanist", textDecorationSkipInk: "none" }}
        >
          Turn your travel experience into itinerary,<br /> travel package with VYB Store and share it <br /> with your true followers.
        </p>
    </div>
  </div>
  )
}

export default Display