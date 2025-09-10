import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-8 bg-red-100'>
      {/* Force grid always */}
      <div className='grid grid-cols-[3fr_1fr_1fr] gap-14 mt-14 text-sm p-6'>
        
        {/* Logo and description */}
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt='Logo'/>
          <p className='w-full md:w-2/3 text-gray-600'>
            Welcome to our fashion store, where style meets affordability. 
            Explore the latest trends and timeless classics, all curated to 
            elevate your wardrobe without breaking the bank. Enjoy a seamless 
            shopping experience with us!
          </p>
        </div>

        {/* Company links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+880-123-456-987</li>
            <li>contact@foreveryoung.com</li>
          </ul>
        </div>
      </div>

      <hr className='border-gray-300'/>
      <p className='py-5 text-center text-sm'>
        Copyright 2025 @foreveryoung.com - All rights reserved.
      </p>
    </div>
  )
}

export default Footer
