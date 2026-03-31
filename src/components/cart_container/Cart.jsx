import React from 'react';
import CartCard from './CartCard';
import { toast } from 'react-toastify';
import { ShoppingCart } from 'lucide-react';


const Cart = ({ selectCart, total, setSelectCart, setTotal }) => {

    const handlePayment = () => {
        setSelectCart([]);
        setTotal(0);
        toast.success("Proceed to Checkout successfully", {
            theme: "colored",
        })
    }

    return (
        <div className='space-y-6 border p-10 rounded-2xl border-[#6273822d] my-10'>
            <h2 className='text-2xl font-bold text-[#101727]'>Your Cart</h2>
            {
                selectCart.map(product => <CartCard key={product.id} product={product} selectCart={selectCart} setSelectCart={setSelectCart} total={total} setTotal={setTotal} />)
            }
            {
                selectCart.length === 0 ?
                    <div className='grid justify-center items-center h-32'>
                        <ShoppingCart className='mx-auto w-20 h-16 text-[#627382a2]' />
                        <p className='font-bold text-[#627382]'>Your Cart is empty</p>
                    </div> :
                    <>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#627382] font-medium text-xl'>Total:</p>
                            <p className='text-2xl font-bold '>${total}</p>
                        </div>

                        <button onClick={handlePayment} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-[#FFFFFF] font-semibold w-full'>Proceed to Checkout</button>
                    </>
            }


        </div>
    );
};

export default Cart;