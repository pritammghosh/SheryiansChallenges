import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className='flex items-center p-5 justify-between'
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className='text-5xl font-[logo]'
        variants={itemVariants}
      >
        Kikin
      </motion.h1>

      <motion.div className="cta flex gap-5 uppercase font-[Gilroy]">
        {["Login", "Get Funding"].map((item, index) => (
          <motion.a
            href="#"
            key={index}
            variants={itemVariants}
            className={`border px-5 py-3 rounded-lg text-[.9rem] font-semibold ${
              index === 1 ? "bg-green-500 text-zinc-800" : ""
            }`}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
