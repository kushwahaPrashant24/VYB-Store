import React from 'react';
import Header from './Header';
import Display from './Display';

function Content() {
  return (
    <div
      className="w-full max-w-[1200px] h-auto min-h-[2045px]  opacity-100  mx-auto p-4 rounded-lg flex flex-col gap-[36px]"
    >
      <Header />
      <div className='h-[1897px] w-[1200px] rounded-[36px] '>
      <Display />
      </div>
    </div>
  )
}

export default Content;