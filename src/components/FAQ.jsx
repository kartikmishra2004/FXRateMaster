import React from "react";

const FAQ = () => {
  return (
    <div className="about-background flex justify-center pt-[6rem] text-4xl text-zinc-200 bg-[#000322] lg:h-[182vh] h-[230vh] w-[100%]">
      <div className="flex lg:px-[3rem] px-[1rem] flex-col w-[90vw] h-max about-card lg:py-[3rem] pb-[3rem] lg:mt-[7vh]">
        <h1 className="lg:text-[3.3rem] text-[2rem] text-center lg:text-start pb-3 lg:pt-[1.9rem] pt-[0.9rem] font-semibold text-zinc-300 lg:mb-5">
          Frequently asked questions
        </h1>
        <h1 className="lg:text-[2rem] text-[1.4rem] text-center lg:text-start pb-3 pt-[0.75rem] lg:pt-[1.9rem] font-medium text-zinc-300">
          1. What is FXRateMaster?
        </h1>
        <p className='lg:text-xl text-[0.95rem] leading-[18px] text-center lg:text-left lg:tracking-wider tracking-normal text-zinc-300'>
        FXRateMaster is a comprehensive currency exchange app that provides real-time exchange rates, historical data, and effortless conversions for over 150 currencies.
        </p>
        <h1 className="lg:text-[2rem] text-[1.4rem] text-center lg:text-start pb-3 pt-[0.75rem] lg:pt-[1.9rem] font-medium text-zinc-300">
          2. How do I use FXRateMaster to convert currencies?
        </h1>
        <p className='lg:text-xl text-[0.95rem] leading-[18px] text-center lg:text-left lg:tracking-wider tracking-normal text-zinc-300'>
        Simply select the currencies you want to convert from and to, enter the amount, and FXRateMaster will provide the real-time conversion rate instantly.
        </p>
        <h1 className="lg:text-[2rem] text-[1.4rem] text-center lg:text-start pb-3 pt-[0.75rem] lg:pt-[1.9rem] font-medium text-zinc-300">
          3. How often are the exchange rates updated?
        </h1>
        <p className='lg:text-xl text-[0.95rem] leading-[18px] text-center lg:text-left lg:tracking-wider tracking-normal text-zinc-300'>
        Exchange rates on FXRateMaster are updated in real-time to ensure you have the most accurate information available.
        </p>
        <h1 className="lg:text-[2rem] text-[1.4rem] text-center lg:text-start py-3 pt-[0.75rem] lg:pt-[1.9rem] font-medium text-zinc-300">
          4. Is FXRateMaster free to use?
        </h1>
        <p className='lg:text-xl text-[0.95rem] leading-[18px] text-center lg:text-left lg:tracking-wider tracking-normal text-zinc-300'>
        FXRateMaster is completely free and offers all features without any in-app purchases.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
