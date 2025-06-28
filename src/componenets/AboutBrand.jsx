import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

// --- Data for the slides ---
const slideData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1741766135837-03019081fc72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // High-res version of the original image
    heading: 'DOING GOOD, TOGETHER.',
    quote:
      '“Kikin has given us the flexibility to extend invoice payments for new product development for up to 6 months. This has enabled us to start selling our products before we have to pay our suppliers which is a great for our cash flow management. What I like most is that we get discounted fees for being a B Corp. It’s great to work with a partner that shares our values”.',
    author: 'Sue Aksaz, Head of Finance at The Nue Co',
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1749732738885-b1fcc64d586a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heading: 'INNOVATE FASTER.',
    quote:
      '“The quick turnaround and simple process allowed us to focus on what we do best: creating amazing products. The financial breathing room was a game-changer for our last product launch, accelerating our go-to-market timeline by months.”',
    author: 'Jane Doe, CEO at Creative Co',
  },
  {
    id: 3,
    image: 'https://plus.unsplash.com/premium_photo-1749352542975-6af6a4c42649?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heading: 'GROW WITH CONFIDENCE.',
    quote:
      '“Partnering with them felt like adding an expert to our team. The support and tools provided have been invaluable for scaling our operations sustainably. We feel more prepared for the future than ever before.”',
    author: 'John Smith, Founder of Growth Inc.',
  },
];

// --- Simplified Animation Variants ---

// For the image: slides vertically
const imageVariants = {
  initial: { y: '-100%' },
  animate: { y: '0%', transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } },
  exit: { y: '100%', transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } },
};

// For the entire text block: fades in and moves up slightly
const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeIn' } },
};


const AboutBrand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F4EF] flex items-center justify-center py-8 font-sans">
      <div className="w-[100vw] flex items-end relative">
        
        {/* === Left Side: Image Container === */}
        {/* The overflow-hidden here is essential to clip the animation. */}
        <div className="relative w-2/6 h-[80vh] overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentIndex} // Crucial for AnimatePresence to detect changes
              src={slideData[currentIndex].image}
              alt={slideData[currentIndex].heading}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* === Right Side: Text & Controls === */}
        <div className="flex flex-col w-full px-[8vw]">
          {/* This simpler structure is more robust. We animate one block of text. */}
          <AnimatePresence mode="wait">
            <motion.div
              className='flex flex-col gap-8'
              key={currentIndex} // Also needs a key to animate correctly
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1
                className="text-[7vw] mr-8 font-bold uppercase leading-none text-[#1A2E20] tracking-tighter"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {slideData[currentIndex].heading}
              </h1>
              <p className="mt-8 text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
                {slideData[currentIndex].quote}
              </p>
              <p className="mt-8 text-sm text-gray-600">
                {slideData[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls are placed outside the animation container to ensure they are always clickable. */}
          <div className="flex gap-4 -mt-10  justify-end pr-[20%]">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#D5D5D2] flex items-center justify-center text-gray-700 hover:bg-[#EAEAE7] transition-colors duration-300"
              aria-label="Previous slide"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#D5D5D2] flex items-center justify-center text-gray-700 hover:bg-[#EAEAE7] transition-colors duration-300"
              aria-label="Next slide"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBrand;