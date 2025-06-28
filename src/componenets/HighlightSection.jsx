import { h1, img } from 'framer-motion/client'
import React from 'react'

const HighlightSection = () => {

    const imgDiv = [
        {src: "public/img/btndiv (1).png", className: "top-0 left-7/15", rotate: 0},
        {src: "public/img/btndiv (3).png", className: "top-10 left-7/10",rotate: -15 },
        {src: "public/img/btndiv (8).png", className: "top-1/3 left-9/10", rotate: 0 },
        {src: "public/img/btndiv (5).png", className: "top-5/8 left-8/10", rotate: 10 },
        {src: "public/img/btndiv (2).png", className: "top-6/8 left-16/25",rotate: 10 },
        {src: "public/img/btndiv (7).png", className: "top-6/8 left-8/20", rotate: -20 },
        {src: "public/img/btndiv (9).png", className: "top-13/20 left-4/20", rotate: 1 },
        {src: "public/img/btndiv (4).png", className: "top-1/3 left-1",rotate: -20 },
        {src: "public/img/btndiv (6).png", className: "top-10 left-1/5",rotate: 0 },
    ]

  return (
    <div className='w-full h-[130vh] flex flex-col justify-center relative py-5'>
        <div className="absolute w-full h-full overflow-hidden">
            {imgDiv.map((items, index)=>(
                <img
                    data-scroll
                    data-scroll-speed="-.1"
                    className={`w-50 h-50 absolute ${items.className}`}
                    key={index}
                    src={items.src}
                    style={{ transform: `rotate(${items.rotate}deg)` }}
                />
            ))}
        </div>
        <div className="flex flex-col font-[headb] items-center text-center" >
            {["Do it for the planet","do it for your bussiness","the better your esg", "scores. gets the bigger", "the discounts"].map((items,index)=>(
            <h1 key={index} className='text-[4vw] leading-15 uppercase text-[#425742]' >{items}</h1>
        ))}
        </div>
    </div>
  )
}

export default HighlightSection