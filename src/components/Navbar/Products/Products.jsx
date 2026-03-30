import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({ productsPromise }) => {
  console.log(productsPromise);
  const products=use(productsPromise)
  return (
    <div>
      <div className='text-center pt-14 '>
        <h1 className='text-[#101727] text-7xl font-bold'>Premium Digital Tools</h1>
        <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {products.map(product => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;