import Fotter from '@/Components/Fotter'
  import contact from '@/Components/images/contact.jpg'

import { FaInstagram, FaLinkedinIn, FaSquareFacebook, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
             <div className='relative '>
                <img src={contact} alt="contact" className='h-[94vh] w-full ' />
                <div className='absolute top-[20vh] left-[10vw] max-w-[60vw]'>
                    <h1 className='text-6xl text-white font-bold mb-5'>Contact Us</h1>
                    <p className='text-2xl text-white'>We are here to help you with any questions or concerns you might have. Please do not hesitate to reach out.</p>
                </div>
            </div>


            <div className='mx-[10vw] mt-10'>
                <h1 className='text-3xl text-gray-700'>Let us know what you think</h1>
                <div className='flex justify-between gap-[5vw] mt-8'>
                    <input type="text" placeholder='Name' className='w-1/2 border-b-2 focus:border-gray-400 pl-3 text-lg text-gray-400 pb-3 outline-none font-medium' />
                    <input type="text" placeholder='Email Address' className='w-1/2 border-b-2 focus:border-gray-400 pl-3 text-lg text-gray-400 pb-3 outline-none font-medium' />
                </div>
                <textarea name="" placeholder='You can type any suggestions or queries you might have. Let us help you!' className='mt-10 w-full text-lg font-medium text-gray-400 outline-gray-400 scrollbar-hidden border-2 border-gray-200 rounded-lg p-3' />
                <button className='mt-10 py-2 px-16 text-xl rounded-lg text-white bg-gray-600 hover:bg-black'>Send</button>
            </div>

            <div className='w-full my-[10vh] px-[5vw] py-5 text-white' style={{ backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)' }}>
                <span className='text-xl block mb-5 font-medium'>Join with us on Social media </span>
                <p className=''>Join us on Facebook, Twitter, Instagram and YouTube as we share uplifting stories of successful fundraisers! </p>
                <div className='flex gap-4 mt-3 text-2xl'>
                    <FaSquareFacebook className='cursor-pointer hover:text-gray-400' />
                    <FaXTwitter className='cursor-pointer hover:text-gray-400' />
                    <FaLinkedinIn className='cursor-pointer hover:text-gray-400' />
                    <FaYoutube className='cursor-pointer hover:text-gray-400' />
                    <FaWhatsapp className='cursor-pointer hover:text-gray-400' />
                    <FaInstagram className='cursor-pointer hover:text-gray-400' />
                </div>
            </div>

            <Fotter />
        </div>
    )
}

export default Contact