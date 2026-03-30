import React, { use } from 'react';
import ProductCard from './ProductCard';

const Product = ({ productPromise }) => {
    const products = use(productPromise);
    return (
        <div className='w-11/12 md:w-10/12 mx-auto '>
            <div className='text-center'>
                <h2 className=' text-4xl md:text-5xl font-extrabold text-[#001931] mb-4'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>



        </div>
    );
};

export default Product;