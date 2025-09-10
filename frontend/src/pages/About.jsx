import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t border-gray-300'>
      <Title text1={'ABOUT '} text2={'US'}/> 
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Forever -where we believe on being Forever Young, where fashion meets timeless style. Our journey began with a simple belief: style should never fade, and confidence should never age. We are passionate about creating a space where you can discover trendy, high-quality clothing designed to make you feel youthful, bold, and unstoppable—no matter where life takes you.

At Forever Young, we aim to bring you styles that last forever, blending modern trends with classic elegance. Each piece in our collection is carefully curated to ensure comfort, quality, and affordability, so you can express yourself without compromise.</p>
        <p>Our mission is to inspire confidence and celebrate individuality through fashion. Whether you’re refreshing your wardrobe, hunting for timeless staples, or exploring the latest trends, Forever Young is here to make your shopping experience seamless and exciting.

Join us as we redefine fashion with hope, passion, and styles that last forever.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>At Forever, our mission is to create timeless styles that inspire confidence and self-expression. We strive to blend modern trends with lasting quality, offering fashion that stays relevant season after season. Our goal is to make style accessible, affordable, and empowering for everyone.</p>
      </div>
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY '} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>
          At Forever, quality is at the heart of everything we do. Each piece is carefully crafted with premium materials and strict attention to detail to ensure durability, comfort, and style. Our products go through a thorough quality check process so you can shop with confidence, knowing every item meets our highest standards.
        </p>
      </div>
      <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>
          At Forever, we believe shopping should be easy, fast, and stress-free. Our user-friendly website is designed to give you a seamless experience—from browsing the latest trends to secure checkout and quick delivery. With flexible payment options and hassle-free returns, we make staying stylish as convenient as it should be.</p>
      </div>
      <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>
          At Forever, Our customers are at the heart of everything we do. Our dedicated support team is always ready to assist you, ensuring a smooth and satisfying shopping experience. From answering your questions to resolving concerns quickly, we go the extra mile to provide personalized, friendly, and reliable service you can count on.</p>
      </div>

    </div>
    <NewsLetterBox/>
    </div>
  )
}

export default About
