import { motion } from "framer-motion";
import Chart from "./Chart";
import Frames from "./Frames";
import visual1 from "./images/visual-1.png";
import visual2 from "./images/visual-2.png";
import visual3 from "./images/visual-3.png";
import visual4 from "./images/visual-4.png";

function Wireframe() {
  return (
    <div className="Wireframe mx-6 md:mx-[72px] text-greyscale-90">
      <div className="research flex flex-col md:flex-row py-6 md:py-[96px] gap-[32px]">
        <p className="text-greyscale-40 md:w-[668px] font-bold text-xl md:text-2xl font-largescreen-caption leading-[24px] text-left">
          Secondary Research/Competitive Analysis
        </p>

        <div className="wrapper md:w-[668px]">
          <p className="mb-[16px] text-left font-bold text-xl md:text-2xl font-largescreen-caption leading-[24px]">
            Brands
          </p>

          {/* Horizontal mobile scroll */}
          <motion.div
            className="flex text-xs md:text-base gap-4 md:gap-8 mb-[16px]"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
          >
            <p className="border self-center font-bold rounded-[4px] px-4 py-2 md:py-4 border-greyscale-20">
              Expedia
            </p>
            <p className="border self-center font-bold rounded-[4px] px-4 py-2 md:py-4 border-greyscale-20">
              Booking.com
            </p>
            <p className="border self-center font-bold rounded-[4px] px-4 py-2 md:py-4 border-greyscale-20">
              SIXT
            </p>
            <p className="border self-center font-bold rounded-[4px] px-4 py-2 md:py-4 border-greyscale-20">
              AirBnB
            </p>
            <p className="border self-center font-bold rounded-[4px] px-4 py-2 md:py-4 border-greyscale-20">
              AVIS
            </p>
          </motion.div>

          <p className="text-xs text-left leading-[18px] italic">
            * I am unable to currently share details of this analysis because of
            non-disclosure and IP agreements
          </p>
        </div>
      </div>
      {/*  */}
      <div className="productDefinition flex flex-col md:flex-row mt-6 text-left gap-2 md:gap-[32px]">
        <p className=" text-2xl md:text-5xl font-medium text-greyscale-100 leading-[48px] font-largescreen-xlargedisplay md:w-[668px]">
          Product Definition
        </p>
        <div className="wrapper md:w-[668px] text-base md:text-lg leading-[24px]">
          <p>
            Product definition encompasses the information architecture and
            visual direction to be used as a guide in building the product.
          </p>

          <p className="mt-[2rem]">
            The Insights gotten from the user research and competitive analysis
            were used to guide the features to be built into Aufera as well as
            determine the hierachy based on importance to the user goals.
          </p>

          <p className="md:mt-8">
            This was then matched with the business needs and engineering
            possibilities to develop a usable, and valuable product.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="architecture flex flex-col md:flex-row my-6 md:my-[88px] text-left gap-2 md:gap-[32px]">
        <p className="text-greyscale-40 md:w-[668px] font-bold text-xl md:text-2xl font-largescreen-caption leading-[24px]">
          Information Architecture
        </p>
        <p className="md:w-[668px] text-[18px] leading-[24px]">
          The way information was prioritized to match user behavior and enhance
          feature accessibility
        </p>
      </div>
      <Chart />
      <Frames />

      <div className="prototyping mt-6 md:mt-[96px]">
        <div className="flex flex-col md:flex-row gap-2 text-left">
          <p className=" text-2xl md:text-5xl font-medium text-greyscale-100 leading-[48px] font-largescreen-xlargedisplay md:w-[668px]">
            Prototyping
          </p>
          <div className="text-wrapper md:w-[668px] text-base md:text-lg leading-[24px]">
            <p>
              To complete the visual structure of the product, I prepared a
              style guide to be used to create tokens for a design system for
              the engineers and create a rapidly-scalable product design
              foundation.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="visuals] mt-[64px]">
          <img
            src={visual1}
            alt="prototype"
            style={{ width: "1190px" }}
            className="mb-[32px]"
          />
          <img
            src={visual2}
            alt="prototype"
            style={{ width: "1190px" }}
            className="mb-[32px]"
          />
          <img
            src={visual3}
            alt="prototype"
            style={{ width: "964px" }}
            className="mb-[32px]"
          />
          <img src={visual4} alt="" style={{ width: "1126px" }} />
        </div>
      </div>
    </div>
  );
}

export default Wireframe;
