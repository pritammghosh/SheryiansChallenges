import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
// --- Data Configuration ---
const CREDIT_RATINGS = [
  { name: 'Poor', feeRate: 0.05 },
  { name: 'Average', feeRate: 0.04 },
  { name: 'Good', feeRate: 0.03125 },
];

const DISCOUNTS_DATA = [
  { id: 'planetMark', name: 'PlanetMark', icon: '🌙', discount: 0.002 },
  { id: 'onePercent', name: 'FOR THE PLANET', icon: '1%', discount: 0.0015 },
  { id: 'bCorp', name: 'Certified B', icon: 'B', discount: 0.0025 },
  { id: 'climateNeutral', name: 'CLIMATE NEUTRAL', icon: '◯', discount: 0.002 },
];

const imagesCircle = [
  { src: "public/img/Mask group-1.png", positionSet: "-top-20 left-0" },
  { src: "public/img/Mask group-2.png", positionSet: "-top-20 left-90" },
  { src: "public/img/Mask group.png", positionSet: "-top-25 left-65" },
];

// --- Motion Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
const fadeSide = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
const locomotiveScroll = new LocomotiveScroll();
function FundingCalculator() {
  const [invoiceAmount, setInvoiceAmount] = useState(50000);
  const [months, setMonths] = useState(4);
  const [creditRatingIndex, setCreditRatingIndex] = useState(2);
  const [selectedDiscounts, setSelectedDiscounts] = useState({});

  // --- Calculations ---
  const calculations = useMemo(() => {
    const currentRating = CREDIT_RATINGS[creditRatingIndex];
    const baseFee = invoiceAmount * currentRating.feeRate;

    const totalDiscountPercent = DISCOUNTS_DATA.reduce((acc, discount) => {
      return selectedDiscounts[discount.id] ? acc + discount.discount : acc;
    }, 0);

    const discountAmount = baseFee * totalDiscountPercent;
    const finalFee = baseFee - discountAmount;
    const totalRepayment = invoiceAmount + finalFee;
    const monthlyRepayment = totalRepayment / months;

    return {
      feePercentage: currentRating.feeRate,
      baseFee,
      totalDiscountPercent,
      discountAmount,
      totalRepayment,
      monthlyRepayment,
    };
  }, [invoiceAmount, months, creditRatingIndex, selectedDiscounts]);

  const handleDiscountToggle = (id) => {
    setSelectedDiscounts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const formatCurrency = (value, fractionDigits = 2) =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency', currency: 'GBP', minimumFractionDigits: fractionDigits,
    }).format(value);

  const formatInvoiceAmount = (value) =>
    value >= 1000 ? `£${Math.round(value / 1000)}K` : `£${value}`;

  return (
    <div className="bg-brand-dark text-white min-h-screen font-sans flex items-center justify-between p-5 sm:p-8 " data-scroll>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* --- Left Panel --- */}
        <div className="flex flex-col justify-between relative">
          
          {/* Heading */}
          <motion.h1
            className="font-display font-black text-6xl sm:text-7xl md:text-8xl leading-none mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            data-scroll
          >
            CALCULATE<br />YOUR<br />FUNDING
          </motion.h1>

          {/* Floating Images */}
          <motion.div
            className="p-5 relative w-[50vw]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            data-scroll
            data-scroll-speed= "-.1"
          >
            {imagesCircle.map((item, index) => (
              <img
                data-scroll
                data-scroll-speed="-.2"
                key={index}
                src={item.src}
                alt={`circle-${index}`}
                className={`absolute ${item.positionSet} w-40 h-40 object-cover`}
              />
            ))}
          </motion.div>

          {/* Paragraph and Button */}
          <motion.div
            variants={fadeSide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            data-scroll
          >
            <p className="max-w-md text-base leading-relaxed mb-8">
              Your funding - and your fee - is based on how financially healthy and ESG aware your company is. The more ESG accreditations you have, the lower your fee.
            </p>
            <button className="bg-green-500 text-black font-bold py-3 px-6 rounded-lg w-fit transition-colors hover:bg-green-600 cursor-pointer">
              GET FUNDING
            </button>
          </motion.div>
        </div>

        {/* --- Right Panel --- */}
        <motion.div
          className="flex items-right ml-10 w-[80%]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          data-scroll
        >
          <div className="w-full bg-brand-dark border border-gray-700 rounded-xl p-6 sm:p-8">
            
            {/* Sliders */}
            <div className="space-y-10">
              {/* Invoice Amount */}
              <div className="grid grid-cols-[170px_1fr_auto] items-center gap-4">
                <label className="text-sm font-medium">Invoice amount</label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                  className="rounded-lg appearance-none cursor-pointer range-input"
                />
                <span className="text-sm font-bold w-12 text-right">
                  {formatInvoiceAmount(invoiceAmount)}
                </span>
              </div>

              {/* Months */}
              <div className="grid grid-cols-[170px_1fr_auto] items-center gap-4">
                <label className="text-sm font-medium">Months to pay back</label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="range-input rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm font-bold w-12 text-right">{months}</span>
              </div>

              {/* Credit Rating */}
              <div className="grid grid-cols-[170px_1fr_auto] items-center gap-4">
                <label className="text-sm font-medium">Credit rating</label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  value={creditRatingIndex}
                  onChange={(e) => setCreditRatingIndex(Number(e.target.value))}
                  className="range-input rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm font-bold w-12 text-right">
                  {CREDIT_RATINGS[creditRatingIndex].name}
                </span>
              </div>
            </div>

            {/* Discounts */}
            <div className="my-8">
              <p className="text-sm mb-3">Claim your discounts</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {DISCOUNTS_DATA.map(d => (
                  <div
                    key={d.id}
                    onClick={() => handleDiscountToggle(d.id)}
                    className={`p-2 border rounded-md cursor-pointer h-24 flex flex-col justify-center items-center text-center transition-all ${
                      selectedDiscounts[d.id]
                        ? 'border-gray-400 bg-green-500/10'
                        : 'border-brand-border hover:border-gray-500'
                    }`}
                  >
                    <div className={`text-2xl font-bold ${selectedDiscounts[d.id] ? 'text-green-400' : ''}`}>
                      {d.icon}
                    </div>
                    <div className="text-[10px] font-semibold mt-1">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className='pt-5'>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-brand-green-mid bg-green-400 text-zinc-800 rounded-full px-1">
                  MONTHLY REPAYMENTS
                </span>
                <span className="text-4xl sm:text-6xl font-bold text-green-600">
                  {formatCurrency(calculations.monthlyRepayment, 0)}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span className="text-gray-400">Fee</span>
                  <span>
                    {formatCurrency(calculations.baseFee)} ({(calculations.feePercentage * 100).toFixed(3)}%)
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="text-gray-400">Discount</span>
                  <span>
                    - {formatCurrency(calculations.discountAmount)} ({(calculations.totalDiscountPercent * 100).toFixed(1)}%)
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-300 font-bold text-gray-200">
                  <span>Total</span>
                  <span>{formatCurrency(calculations.totalRepayment)}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-2 text-center">
              This is an illustrative example to help you estimate your funding, actual amounts may vary.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FundingCalculator;
