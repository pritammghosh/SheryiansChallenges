import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,    // Delay between each child animation
      delayChildren: 0.5,      // Delay before children start animating
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const itemVariantsBtn = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: 'easeOut',
    },
  },
};

const itemVariantsChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};


const Home = () => {
  return (
    <div className="h-[100vh] relative overflow-hidden text-center font-[headb] leading-none mb-15">
      
      {/* ✅ Background Zooming Layer */}
      <motion.div
        initial={{ scale: 1.2 , opacity: 0}}
        animate={{ scale: 1, opacity:1}}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 bg-no-repeat bg-contain bg-bottom z-0"
        style={{
          backgroundImage:
            "url('https://www.andrewoplas.com/images/homepage/hero-illustration.svg')",
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
        }}
      />

      {/* ✅ Text Content Layer */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-start h-full p-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="uppercase font-bold text-[7vw]" variants={itemVariants}>
          Financing
        </motion.h1>

        <motion.h1 className="uppercase font-bold text-[7vw] text-[#51D948]" variants={itemVariantsBtn}>
          The Future
        </motion.h1>

        <motion.p className="font-[Inter] tracking-wider py-5 mb-3 leading-6" variants={itemVariantsChild}>
          Pay Suppliers faster, manage invoices, and extend cash for longer. <br />
          Get access to funding without giving up equity, so that you can focus <br />
          on growing up your company
        </motion.p>

        <motion.a
          href="#"
          className="px-5 py-3 rounded-lg text-[.9rem] font-[Gilroy] bg-green-500 text-zinc-800 uppercase tracking-wide"
          variants={itemVariantsChild}
        >
          Get Funding
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Home;
