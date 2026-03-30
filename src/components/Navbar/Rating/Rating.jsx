import React from 'react';

const Rating = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
      < div className='w-9/12 mx-auto text-white flex justify-between  p-20'>
        <div className='border-r-2 border-gray-300'>
          <h1 className='text-4xl font-bold mr-8 '>50K+</h1>
          <p className='text-xl mr-8'>Active Users</p>
        </div>
        <div className='border-r-2 border-gray-300'><h1 className='text-4xl font-bold mr-8 '>200+</h1>
        <p className='text-xl mr-8 '>Premium Tools</p></div>
        <div className='border-r-2 border-gray-300'><h1 className='text-4xl font-bold mr-8 '>4.9</h1>
        <p className='text-xl mr-8 '>Rating</p></div>
      </div>
    </div>
  );
};

export default Rating;