import React from 'react';
import Header from './Header';
import Display from './Display';

function Content() {
  return (
    <div
      className="w-full max-w-[1200px] h-auto min-h-[2045px] gap-9 opacity-100  mx-auto p-4 rounded-lg"
    >
      <Header />
      <Display />
    </div>
  )
}

export default Content;