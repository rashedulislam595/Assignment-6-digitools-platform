import React from 'react';
import CartCard from './CartCard';

const Cart = ({selectCart,total}) => {
    
    return (
        <div className='space-y-6 border p-10 rounded-2xl border-[#6273822d] my-10'>
            <h2 className='text-2xl font-bold text-[#101727]'>Your Cart</h2>
            {
                selectCart.map(product=> <CartCard key={product.id} product={product}/>)
            }
            <div className='flex justify-between items-center'>
                <p className='text-[#627382] font-medium text-xl'>Total:</p>
                <p className='text-2xl font-bold '>${total}</p>
            </div>

            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-[#FFFFFF] font-semibold w-full'>Proceed to Checkout</button>

        </div>
    );
};

export default Cart;