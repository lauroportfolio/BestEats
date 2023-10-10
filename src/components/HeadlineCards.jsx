import React from 'react'
import item1 from '../assets/item1.jpg'
import item2 from '../assets/item2.jpg'
import item3 from '../assets/item3.jpg'

const HeadlineCards = () => {

    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    src={item1}
                    alt="item-1"
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                    <p className='px-2'>Added Only</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    src={item2}
                    alt="item-2"
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D&auto=format&fit=crop&w=800&q=60'
                    alt="item-3"
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                />
            </div>
        </div>
    )
}

export default HeadlineCards
