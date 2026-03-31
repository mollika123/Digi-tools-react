import React from 'react';
import cartImg from '../../../assets/assets/products/shopping-cart.png'
import { toast } from 'react-toastify';
const Cart = ({ carts,setCarts}) => {
  console.log(carts);
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);
  
  const handlePayment = () => {
    setCarts([]);
    toast.info('Payment successfull');
  };

  const handleRemove = (cart) => {
    const filteredArray = carts.filter(item=>item.id !== cart.id);
    setCarts(filteredArray);
    toast.error('Product remove successfully')
  }
  return (
    <div className=' w-11/12 mx-auto pt-20 pb-10'>
      <h1 className='text-2xl font-bold'>Your Cart</h1>
      {carts.length===0?(<div className='w-11/12 mx-auto p-30 text-xl text-center'><img className='mx-auto w-[50px]' src={cartImg} alt="" /><p className='text-[#627382]'>Your cart is empty</p></div>):( carts.map(cart => <div key={cart.id}>
        < div className='p-10 shadow-2xl'>
            <div className='flex justify-between'>
          <div className='flex gap-4'>
            <div><img src={cart.icon} alt="" /></div>
            
            <div className=''><h2>{cart.name}</h2>
              <p className='text-[#627382]'>${cart.price}</p>
            </div>
          </div>
          <div>
            <button onClick={()=>handleRemove(cart)} className='btn text-red-400 rounded-full'>Remove</button></div>
    </div>
      </div>
      </div>))}
     
      <div className='flex justify-between p-10'>
        <div className='text-[#627382] text-xl'>Total:</div>
        <div className='text-xl'>${totalPrice }</div>
      </div>

      <div>
        <button onClick={handlePayment } className='btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-xl p-6'>Proceed to Checkout</button>
      </div>
    </div>

  );
};

export default Cart;