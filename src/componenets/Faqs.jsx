import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

// --- FAQ Data ---
const faqData = {
  funding: [
    {
      question: 'HOW QUICKLY CAN I ACCESS THE FUNDS?',
      answer:
        "Once your application is approved, funds are typically transferred to your account within 24-48 hours. The exact timing can depend on your bank's processing speed.",
    },
    {
      question: 'WHAT CAN I USE THE FUNDING FOR?',
      answer:
        'You can use the funding for any legitimate business purpose, including purchasing inventory, launching marketing campaigns, hiring new staff, or managing day-to-day cash flow.',
    },
    {
      question: 'HOW DO I KNOW THAT MY COMPANY IS A GOOD MATCH?',
      answer:
        'We typically partner with established businesses that have a consistent revenue history. The best way to know for sure is to complete our short, no-obligation application.',
    },
    {
      question: 'CAN I PAY TO SUPPLIERS ABROAD?',
      answer:
        'Yes, our funding solutions are designed to be flexible. You can absolutely use the funds to pay international suppliers and manage your global supply chain.',
    },
  ],
  repayments: [
    {
      question: 'WHAT ARE THE REPAYMENT TERMS?',
      answer:
        "Repayment terms are flexible and tailored to your business's cash flow. We offer various schedules, including daily, weekly, and monthly options, typically ranging from 3 to 18 months.",
    },
    {
      question: 'ARE THERE ANY EARLY REPAYMENT PENALTIES?',
      answer:
        'No, we believe in rewarding financial discipline. There are absolutely no penalties for repaying your funding early. In some cases, you may even be eligible for a discount.',
    },
  ],
  general: [
    {
      question: 'WHAT DOCUMENTS DO I NEED TO APPLY?',
      answer:
        'Our application process is streamlined. In most cases, all you need are your basic business details and recent bank statements. We handle the rest.',
    },
    {
      question: 'IS MY DATA SECURE?',
      answer:
        'Absolutely. We use bank-level 256-bit encryption to protect all your data. Your privacy and security are our top priorities.',
    },
  ],
};

const categories = [
  { id: 'funding', label: 'FUNDING', icon: 'ri-database-2-line' },
  { id: 'repayments', label: 'REPAYMENTS', icon: 'ri-loop-left-line' },
  { id: 'general', label: 'GENERAL', icon: 'ri-question-line' },
];

// --- Accordion Item Component ---
const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="py-6 border-b border-gray-300 last:border-b-0 font-[headb] w-[40vw]">
      <motion.div
        initial={false}
        onClick={onClick}
        className="flex justify-between items-center cursor-pointer w-full"
      >
        <h3 className="text-[1.4rem] font-semibold text-[#1A2E20]">{faq.question}</h3>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <i className="ri-add-line text-2xl text-gray-600"></i>
        </motion.div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
  key="content"
  initial="collapsed"
  animate="open"
  exit="collapsed"
  variants={{
    open: { opacity: 1, height: 'auto', marginTop: '16px' },
    collapsed: { opacity: 0, height: 0, marginTop: '0px' },
  }}
  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
  className="overflow-hidden"
>
  <p className="text-gray-600 font-[Inter] w-[70%] p-3">
    {faq.answer}
  </p>
</motion.div>

        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main FAQ Component ---
const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState('funding');
  const [openQuestion, setOpenQuestion] = useState(0);

  const currentFaqs = faqData[activeCategory];

  return (
    <div className="w-full min-h-screen bg-[#F5F4EF] py-16 px-4 sm:px-8">
      <div className="relative mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold text-[#1A2E20] mb-12">FAQS</h1>

        <div className="flex flex-col md:flex-row gap-12 justify-between ">
          {/* Left Side: Categories */}
          <div className="md:w-1/4">
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenQuestion(0);
                    }}
                    className={`flex items-center gap-3 text-[1rem] font-bold uppercase tracking-wider transition-colors duration-300 ${
                      activeCategory === cat.id
                        ? 'text-[#1A2E20]'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <i className={cat.icon}></i>
                    <span>{cat.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Accordion */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    faq={faq}
                    isOpen={openQuestion === index}
                    onClick={() =>
                      setOpenQuestion(openQuestion === index ? null : index)
                    }
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
