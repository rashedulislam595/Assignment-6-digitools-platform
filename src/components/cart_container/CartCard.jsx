import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({ product,selectCart,setSelectCart,total,setTotal}) => {
    const handleRemove = (product) =>{
        const filterProduct = selectCart.filter(item => item.name!=product.name);
        setSelectCart(filterProduct)
        setTotal(total-product.price);
        toast.success("Product removed successfully")
    }

    return (
        <div className='flex justify-between items-center bg-[#F9FAFC] rounded-2xl p-5 shadow-sm'>
            <div className='flex gap-3 items-center'>
                <img className='w-14 h-14' src={product.icon} alt={product.name} />
                <div>
                    <h2 className='text-xl font-semibold text-[#101727]'>{product.name}</h2>
                    <p className='text-[#627382] font-medium'>${product.price}</p>
                </div>
            </div>
            <button onClick={()=>handleRemove(product)} className='btn text-[#FF3980]'>Remove</button>
        </div>

    );
};

export default CartCard;