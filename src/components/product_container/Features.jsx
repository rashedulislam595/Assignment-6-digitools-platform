import { Check } from 'lucide-react';
import React from 'react';

const Features = ({ item }) => {
    return (
        <div>
            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />{item}</li>
        </div>
    );
};

export default Features;