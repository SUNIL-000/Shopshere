import React from 'react'
import ProductCard from './ProductCard'

const Template = () => {
    return (
        <>
            <div className='w-[95vw] md:w-[80vw] mx-auto px-5 py-2'>
                <h1 className='font-bold uppercase text-2xl drop-shadow-md mb-7 text-[#191919dc] '>latest product</h1>
                
                {/* product card section  */}
                <div className='flex flex-wrap gap-3 justify-evenly'>
                    
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                </div>
            </div>
        </>
    )
}

export default Template