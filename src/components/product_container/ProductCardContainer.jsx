import React from 'react';
import ProductCard from './ProductCard';

const ProductCardContainer = ({products,selectCart,setSelectCart,setTotal,total}) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 py-4'>
            {products.map(product => <ProductCard key={product.id} product={product} setSelectCart={setSelectCart} selectCart={selectCart} setTotal={setTotal} total={total}/>)}
        </div>
    );
};

export default ProductCardContainer;