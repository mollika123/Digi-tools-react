import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

const ProductCard = ({ product,carts,setCarts}) => {
  console.log(product);
  const [add, setAdd] = useState(false);
  const handleAddButton = () => {
    
    setAdd(true);
    setCarts([...carts,product])
   toast.success('Product added to cart')
  }
  return (
    <div className='p-5 shadow-2xl space-y-3'>
      <div className='flex justify-end'>
        {product.tag && (
          <div className={`px-4 py-1.5 text-right rounded-xl w-fit items-right px-4 py-1.5 
            ${product.tag === 'best seller' ? ("bg-[#FEF3C6] text-[#BB4D00]") : ''}
            ${product.tag==='new'?('bg-[#DBFCE7] text-[#0A883E]'):''}
            ${product.tag==='popular'?('bg-[#E1E7FF] text-purple-600'):''}
            
            
            `}>
            
            {product.tag === 'popular' && 'Popular'} 
            {product.tag === 'best seller' && 'Best Seller'}
            {product.tag==='new'&&'New'}
            
            </div>
        )}
      </div>
      <div className='h-12 w-12'><img src={product.icon} alt="" /></div>
      <h1 className='text-2xl font-bold '>{product.name }</h1>
      <p className='text-[#627382]'>{ product.description}</p>
      <h2 className='text-2xl font-bold my-2'>${product.price}<span className='text-[#627382] text-xl'>/{product.period }</span></h2>
      <p className='flex items-center'><TiTick className='text-green-400'></TiTick>{product.features[0] }</p>
      <p className='flex items-center'><TiTick className='text-green-400'></TiTick>{product.features[1] }</p>
      <p className='flex items-center'><TiTick className='text-green-400'></TiTick>{product.features[2] }</p>
      <button onClick={handleAddButton} className={`btn w-full  text-white rounded-full ${add ?"bg-green-500":"bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>{add?"Added to Cart":'Buy Now'}</button>
    </div>
  );
};

export default ProductCard;