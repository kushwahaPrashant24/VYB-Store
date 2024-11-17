import React from 'react';
import Header from './Header';
import Display from './Display';
import Itineraries from './Itineraries';
import Path from './Path';

function Content() {
  return (
    <div
      className="w-full max-w-[1200px] h-auto min-h-[2045px]  opacity-100  mx-auto p-4 rounded-lg flex flex-col gap-[36px]"
    >
      <Header />
      <div className='h-[1897px] w-[1200px] bg-black rounded-[36px] flex flex-col gap-[35px] '>
      <Display />
      <Itineraries />
      <Path />
      </div>
    </div>
  )
}

export default Content;