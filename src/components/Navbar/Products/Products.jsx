import React, { use, useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';


const Products = ({ productsPromise,carts,setCarts}) => {
  console.log(productsPromise);
  const products = use(productsPromise);
  const [activeTab, setActiveTab] = useState("products");
  console.log(activeTab);
  return (
    <div>
      <div className='text-center pt-14 space-y-4 '>
        <h1 className='text-[#101727] text-5xl font-bold'>Premium Digital Tools</h1>
        <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
      </div>

      {/* name of each tab group should be unique */}
<div className="tabs justify-center mx-auto pt-20 tabs-box bg-transparent ">
 
  <input onClick={()=>setActiveTab('products')} type="radio" name="my_tabs_1" className={`tab rounded-full px-9 py-3 ${activeTab==='products'?'bg-linear-to-r from-[#4F39F6] to-[#9514FA]':""}`} aria-label="Products" defaultChecked />
        <input onClick={()=>setActiveTab('Cart')}type="radio" name="my_tabs_1" className={`${activeTab==='products'?"":'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}  tab rounded-full px-9 py-3 `}aria-label={`Cart(${carts.length})`} />
      </div>
 
      {activeTab==='products'?(

      <div className='grid md:grid-grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto pt-10 pb-10'>
       
        {products.map(product => (
              <ProductCard key={product.id} product={product} carts={carts} setCarts={setCarts}></ProductCard>

         
        ))}</div>)
          
          
          :(<Cart carts={carts} setCarts={setCarts}></Cart>)};




          
      </div>
    
  );
};

export default Products;