import React, { use, useState, } from 'react';

import Cart from '../cart_container/Cart';
import ProductCardContainer from './ProductCardContainer';

const Product = ({ productPromise,selectCart,setSelectCart }) => {
    const products = use(productPromise);
    const [selectType, setSelectType] = useState("Products")
    const [total,setTotal] = useState(0)
    
    return (
        <div className='w-11/12 md:w-10/12 mx-auto '>
            <div className='text-center'>
                <h2 className=' text-4xl md:text-5xl font-extrabold text-[#001931] mb-4'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>
           {/* toggling tab */}
            <div className='mt-5 flex justify-center gap-1'>
                <button onClick={()=>setSelectType("Products")} className={`btn w-32 rounded-full ${selectType==="Products"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF]": "text-[#13131360]"} `}>Products</button>
                <button onClick={()=>setSelectType("Cart")} className={`btn w-32 rounded-full ${selectType==="Cart"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF]": "text-[#13131360]"}`}>Cart ({selectCart.length})</button>
            </div>



            <div >
                {
                   selectType==="Products"?<ProductCardContainer products={products} setSelectCart={setSelectCart} selectCart={selectCart} total={total} setTotal={setTotal}/>:<Cart selectCart={selectCart} setSelectCart={setSelectCart} total={total} setTotal={setTotal}/>
                }
            </div>



        </div>
    );
};

export default Product;