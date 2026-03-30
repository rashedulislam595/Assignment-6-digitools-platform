import { Check } from 'lucide-react';
import React from 'react';
import Features from './Features';

const ProductCard = ({product}) => {
    console.log(product)
    const tagStyle = {
        "best seller":"bg-[#FEF3C6] text-[#BB4D00]",
        "popular" : "bg-[#E1E7FF] text-[#9514FA]",
        "new": "bg-[#DBFCE7] text-[#0A883E]"
    }
    const style = tagStyle[product.tagType];
    const features = product.features
    return (
        <div className='space-y-4 p-6 shadow-sm  rounded-2xl border border-[#4e566036] flex flex-col'>
            <div className='text-right'>
                <button className={`text-sm ${style}  font-medium  py-2 px-3 rounded-full`}>{product.tagType}</button>
            </div>
            <img src={product.icon} className='w-16 h-16' alt="img" />
            <h2 className='text-2xl font-bold text-[#101727] '>{product.name}</h2>
            <p className='text-[#627382]'>{product.description}</p>
            {/* price */}
            <p className='text-[#627382]'><span className='text-2xl font-bold text-[#101727]'>${product.price}</span>/{product.period}</p>
            {/* Features section */}
            <ul className='text-[#627382] space-y-2 grow'>
                {
                    features.map((item,ind) =><Features key={ind} item={item}/>)
                }
                
            </ul>
            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF] font-bold w-full rounded-full'>Buy Now</button>

        </div>
    );
};

export default ProductCard;