import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
const SectionBar = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const contentData = [
    {
      number: "01",
      heading: "Grow with<br/> the flow",
      para: "We help you preserve your cash, so that you can focus on growing your business and improve cash flow.",
      srcImg: "public/img/first.png"
    },
    {
      number: "02",
      heading: "Adaptable Funding. Endless Possibilities.",
      para: "Our AI-driven funding automatically updates as you grow, so you can always get the right amount of funds.",
      srcImg: "public/img/snd.png"
    },
    {
      number: "03",
      heading: "Fast Funds. <br/> Full Equity.",
      para: "Build your cash instantly without the need for dilution, and own more of your business longer.",
      srcImg: "public/img/fisrt.png"
    },
  ];

  return (
    <div className="flex flex-col gap-20 bg-[#F4EBE2] pb-[15vh]">
      {contentData.map((item, index) => (
        <ImageSection key={index} item={item} />
      ))}
    </div>
  );
};

const ImageSection = ({ item }) => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const button = buttonRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left - button.offsetWidth / 2;
      mouseY = e.clientY - rect.top - button.offsetHeight / 2;

      // Fade in the button
      button.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      // Fade out the button
      button.style.opacity = "0";
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      button.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    animate();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div  className="flex h-[70vh] relative border-b-3 border-[#797979] pt-20">
      <div className="w-9/20 h-full px-5 text-zinc-800 justify-between flex flex-col py-5">
        <div data-scroll data-scroll-speed=".1.5" className="flex flex-col gap-3">
          <h3 className="px-[20px] py-[16px] bg-green-500 w-fit text-[1.2rem] rounded-full font-bold">
            {item.number}
          </h3>
          <h1  className="font-[headb] text-[4vw] leading-18 uppercase">
            {item.heading.split('<br/>').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>
        </div>
        <p className="font-[Inter] text-[1.2rem]">
          {item.para}
        </p>
      </div>

      <div className="w-11/20 h-full flex justify-end items-center pr-10">
        <div
          ref={containerRef}
          className="w-9/10 h-[90%] rounded-lg overflow-hidden relative"
        >
          <button
            ref={buttonRef}
            className="text-green-400 absolute text-[1.1rem] font-bold bg-black h-[15vh] w-[15vh] rounded-full flex items-center justify-center pointer-events-none transition-opacity duration-300 opacity-0"
          >
            Know More
          </button>
          <img
            src={item.srcImg}
            className="w-full h-full object-cover rounded-lg"
            alt="section visual"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionBar;
