import React from 'react';
import bannerIcon from '../../assets/assets/products/shopping-cart.png'
const Navbar = () => {
  return (
    <div className='border-b-2 border-[#627382] shadow-2xl'><div className='w-11/12 mx-auto '>
      <div className='flex justify-between items-center pt-8 pb-8 overflow-hidden'>
        <div>
          <h1 className='text-4xl font-bold text-[#627382]'>DigiTools</h1>
        </div>
        <div><ul className='flex justify-between gap-9 text-[#101727] font-semibold'>

        <li><a href="">Products</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Testimonials
</a></li>
        <li><a href="">FAQ</a></li>
        </ul></div>

        <div className='flex items-center gap-2'>
         <div> <img src={bannerIcon} alt="" /></div>
          <button className='btn rounded-full'>Login</button>
        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-3 rounded-full'>Get Started</button></div>
      </div>
    </div></div>
  );
};

export default Navbar;