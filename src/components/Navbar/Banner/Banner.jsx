import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaDotCircle } from 'react-icons/fa';
import bannerImg from '../../../assets/assets/banner.png';
const Banner = () => {
  return (
    <div className='w-11/12 mx-auto pt-20 pb-20'>
      <div className='flex justify-between items-center  gap-6'>
        <div className='space-y-6'>
          <button className=' btn rounded-full bg-[#E1E7FF] '><span className='flex items-center gap-2 p-3  font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'><FaDotCircle className="text-[#4F39F6]"></FaDotCircle>  New:AI-Powered Tools Available</span></button>
        
        <h1 className='text-[#101727] text-5xl font-bold'>Supercharge Your <br />Digital Workflow</h1>
        <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
          </p>
          <button className='rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-3 mr-4'>Explore Products</button>
          <button className="btn btn-outline btn-primary py-3 px-5 rounded-full"><CiPlay1></CiPlay1>
            Watch Demo</button>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;