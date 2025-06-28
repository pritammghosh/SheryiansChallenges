import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Featured = () => {
  const images = [
    { src: "public/img/Group 7.png", className: "top-10 left-15" },
    { src: "public/img/Group 8.png", className: "top-5 right-30" },
    { src: "public/img/Group 11.png", className: "bottom-5 left-45" },
    { src: "public/img/Group 10.png", className: "bottom-0 right-50" },
    { src: "public/img/Group 9.png", className: "top-70 -right-10" },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4, 
  });

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="w-full h-[120vh] bg-[#F4EBE2] text-center font-[headb] leading-15 text-zinc-800 flex flex-col justify-center items-center relative"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        ref={ref}
        variants={textVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {["Good for the", "planet.and", "your business"].map((item, index) => (
          <motion.h1
            key={index}
            className="uppercase font-bold text-[6.5vw] pt-10"
            variants={textVariants}
          >
            {item}
          </motion.h1>
        ))}

        <motion.p
          className="font-[Inter] text-[1.1rem] tracking-wider pt-10 pb-5 leading-6"
          variants={textVariants}
        >
          Pay suppliers faster, manage invoices, and extend cash for longer. <br />
          Get access to funding without giving up equity, so that you can focus <br />
          on growing your company.
        </motion.p>
      </motion.div>

      <a
        href="#"
        className="w-fit px-5 rounded-lg text-[.9rem] font-[Gilroy] bg-green-500 text-zinc-800 uppercase tracking-wide"
      >
        Get Funding
      </a>

      <div className="absolute w-full h-screen overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            className={`absolute ${img.className} w-75 h-75 transition-transform duration-300 hover:scale-110 hover-rotate`}
            alt={`cloud-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
