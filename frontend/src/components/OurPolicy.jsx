import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const OurPolicy = () => {
  return (
    <div className='py-10 text-gray-700 text-xs sm:text-sm md:text-base'>
      {/* Title row */}
      <div className='text-center text-3xl py-8'>
        <Title text1={'OUR '} text2={'POLICY'} />
      </div>

      {/* Policies row */}
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-8 text-center'>
        <div>
          <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange" />
          <p className='font-semibold'>Easy Exchange Policy</p>
          <p className='text-gray-400'>We offer hassle-free exchange policy</p>
        </div>
        <div>
          <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Quality" />
          <p className='font-semibold'>7 Days Return Policy</p>
          <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div>
          <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support" />
          <p className='font-semibold'>Best Customer Support</p>
          <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
