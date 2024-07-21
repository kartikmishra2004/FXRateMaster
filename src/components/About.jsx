import React from "react";

const About = () => {
  return (
    <div className="about-background flex justify-center pt-[6rem] text-4xl text-zinc-200 bg-[#000322] lg:h-[140vh] w-[100%]">
      <div className="flex px-[3rem] flex-col w-[90vw] h-max about-card py-[3rem] mt-[14vh]">
        <h1 className="lg:text-[3.3rem] text-[2rem] text-center lg:text-start py-3 font-semibold text-zinc-300">
          About FXRateMaster
        </h1>
        <p className="lg:text-xl text-[0.95rem] leading-[18px] text-center lg:text-left lg:tracking-wider tracking-normal lg:pt-4 text-zinc-300">
          FXRateMaster is a dynamic and user-friendly currency converter
          application designed to simplify the process of converting currencies.
          Whether you are a traveler, a business professional, or someone
          interested in foreign exchange rates, FXRateMaster provides an
          intuitive interface for real-time currency conversion.
        </p>
        <h1 className="lg:text-[3.3rem] text-[2rem] text-center lg:text-start py-3 font-semibold text-zinc-300">
          Key Features:
        </h1>
        <p className="lg:text-xl text-[0.95rem] leading-[18px] text-center lg:text-left lg:tracking-wider tracking-normal lg:pt-4 text-zinc-300">
          <strong>Real-time Exchange Rates</strong>: Get the latest exchange
          rates for a wide range of currencies updated in real-time. <br />{" "}
          <br />
          <strong>User-Friendly Interface</strong>: Enjoy a clean and responsive
          design that makes currency conversion quick and effortless. <br />{" "}
          <br />
          <strong>Multiple Currencies</strong>: Convert between multiple
          currencies from around the world with ease. <br /> <br />
          <strong>Historical Data</strong>: Access historical exchange rates to
          make informed decisions based on past trends. <br /> <br />
          <strong>Customizable Settings</strong>: Personalize your experience by
          selecting your preferred currency and setting default values for
          frequent conversions. <br /> <br />
          <strong>Secure and Reliable</strong>: Built with a focus on security
          and accuracy, ensuring that your data and conversions are handled
          safely.
        </p>
      </div>
    </div>
  );
};

export default About;
