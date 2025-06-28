import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full text-xs text-gray-400 h-screen flex justify-between flex-col bg-[#072012]">
        <img src="public\img\ChatGPT Image Jun 23, 2025, 10_49_17 AM.png" alt="" className='absolute w-full h-full object-cover' />
        <div className="z-20">
            <h1 className='text-[7vw] pt-20 leading-none uppercase font-bold text-center'>Get Funding</h1>
        <h1 className='text-[7vw] pb-10 leading-none uppercase font-bold text-center text-yellow-500'>Change the <br />World</h1>
        </div>
      <div className=" gap-8 items-end justify-evenly flex z-20 pb-5">
        <div className="flex items-center gap-4">
          <div>
            <p>Get in touch</p>
            <a 
              href="mailto:support@kikin.io" 
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              support@kikin.io
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p>2023 Kikin Financial Ltd</p>
          <p>Company no. 14569152</p>
          <p>Ground Floor, Verse Building, 18</p>
          <p>Brunswick Place, London, N1 6DZ</p>
        </div>
        <div className="flex flex-col items-start sm:items-center md:items-end gap-2">
          <div className='flex gap-4'>
            <a 
              href="#" 
              className="hover:text-white underline transition-colors duration-200"
            >
              Privacy policy
            </a>
            <a 
              href="#" 
              className="hover:text-white underline transition-colors duration-200"
            >
              Terms of service
            </a>
          </div>
          <div className="flex gap-2 mt-2">
            <a 
              href="#" 
              className="px-3 py-1 border border-gray-600 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="px-3 py-1 border border-gray-600 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              Twitter
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;