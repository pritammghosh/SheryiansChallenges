// src/components/WhoWeFund.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA: Replace with your actual content and image paths ---
const fundingData = [
  {
    id: 1,
    title: ["WHO WE", "FUND"],
    paragraph: "We back companies committed to a better world with strong environmental, social, and governance ethics.",
    bgImage: "https://images.unsplash.com/photo-1749928384244-818a191d9ac7?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fgImage: "https://images.unsplash.com/photo-1746311507414-bce6f67abb44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: ["BUILD FOR", "GROWTH"],
    paragraph: "Our funding is designed for innovators looking to scale their operations and disrupt the market sustainably.",
    bgImage: "https://images.unsplash.com/photo-1749320289616-486d17d84c63?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fgImage: "https://images.unsplash.com/photo-1744019960830-eb79b2528f8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: ["INNOVATE", "RESPONSIBLY"],
    paragraph: "We prioritize businesses that embed ethical and environmental considerations into their core technology.",
    bgImage: "https://images.unsplash.com/photo-1750099255888-91d5386e833c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fgImage: "https://images.unsplash.com/photo-1745282322383-8ec67cc895b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: ["GLOBAL", "REACH"],
    paragraph: "From local startups to international enterprises, our network supports a diverse portfolio of world-changers.",
    bgImage: "https://images.unsplash.com/photo-1749680287741-243118ed6b2c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fgImage: "https://images.unsplash.com/photo-1749310112178-d0e62994b0e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: ["LONG-TERM", "PARTNERS"],
    paragraph: "We are more than funders; we are partners invested in your long-term success and positive impact.",
    bgImage: "https://plus.unsplash.com/premium_photo-1724413941655-24c6eb2b28c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    fgImage: "https://images.unsplash.com/photo-1750182288833-744e3ed01034?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const WhoWeFund = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fundingData.length);
  };

  const handleMouseMove = (event) => {
    // getBoundingClientRect gives the position relative to the viewport
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({ 
      x: event.clientX - rect.left, 
      y: event.clientY - rect.top 
    });
  };

  const currentData = fundingData[currentIndex];

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5, ease: 'easeIn' } },
  };
  
  // Variants for the cursor-following "Explore" button
  const cursorVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: mousePosition.x - 48, // Subtract half the width/height to center it
      y: mousePosition.y - 48,
    },
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full font-['Founders_Grotesk'] bg-[#82C4D3] cursor-pointer p-5"
      onClick={handleNext}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full overflow-hidden h-[90vh]">
        {/* Background and Foreground Images with smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentData.id + "-bg"}
            src={currentData.bgImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: .5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-[90%] object-cover"
            alt="Background"
          />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentData.id + "-fg"}
            src={currentData.fgImage}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] md:w-[35%] h-auto object-contain"
            alt="Foreground Feature"
          />
        </AnimatePresence>

        {/* --- NEW: Cursor Following Button --- */}
        <motion.div
            variants={cursorVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.5 }}
            className="absolute z-20 w-24 h-24 bg-green-500 text-black rounded-full pointer-events-none flex items-center justify-center font-['logo'] uppercase text-sm"
        >
            Explore
        </motion.div>
        
        {/* --- UPDATED: Content Container for Text --- */}
        <div className="relative z-10 w-full h-full p-8 md:p-16 text-white flex flex-col justify-between">
            {/* Title Text (Top Right) */}
            <div className="w-full text-right">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentData.id}
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {currentData.title.map((line, index) => (
                             <h1 key={index} className="text-6xl md:text-8xl font-bold uppercase leading-none font-[headb]">
                                {line}
                             </h1>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Paragraph Text (Bottom Left) */}
            <div className="w-full md:w-1/4">
                <AnimatePresence mode="wait">
                    <motion.p 
                        key={currentData.id}
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-[1.2rem] font-['Inter'] mb-7"
                    >
                        {currentData.paragraph}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
      </div>
      
      {/* Bottom Static Section (Unchanged) */}
      <div className="w-full flex items-center border-t-2 text-zinc-800 font-[headb]">
        {[
          { text: "UK-BASED SMALL TO MIDSIZE BUSINESSES", tag : <i class="ri-home-5-line"></i> },
          { text: "WHO NEED TO PAY TO SUPPLIERS AROUND THE WORLD", tag: <i class="ri-file-text-line"></i> },
          { text: "WHO CAN DEMONSTRATE SUSTAINABILITY EFFORTS", tag: <i class="ri-leaf-line"></i> },
        ].map((item, index) => (
          <div
            key={index}
            className={`h-[50vh] pb-10 w-1/3 p-4 md:p-6 flex items-start gap-4 ${index < 2 ? 'border-r-2 border-zinc-700' : ''}`}
          >
            <p className="text-[2.3rem] font-bold uppercase leading-tight pr-[.5rem] flex flex-col gap-5">
              <span className='text-xl w-[2vw] h-[2vw] bg-zinc-800 text-[#82C4D3] rounded-full text-center font-light'>{item.tag}</span>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeFund;