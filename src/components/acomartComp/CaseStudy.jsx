import outArrow from "./images/outward-arrow.svg";
import acomartHeader from "./images/acomart-header.png";
import { motion } from "framer-motion";

function CaseStudy() {
  return (
    <div className="caseStudy mx-6 md:mx-[72px]">
      <h1 className="flex mt-[40px] font-black font-largescreen-largedisplay text-left text-4xl md:text-[80px]leading-[80px]">
        Afrostream (Case Study)
      </h1>
      <p className="flex mt-[16px]">
        <a
          href="http://www.myafrostream.tv"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-xl md:text-2xl font-bold"
        >
          www.myafrostream.tv <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      <div className=" mt-12 md:mt-[120px] mb-8 md:mb-[88px]">
        <img src={acomartHeader} alt="Afrostream header" />
      </div>

      <div className="details text-base md:text-lg md:max-w-full">
        <div className="overview flex flex-col md:flex-row gap-2 md:gap-[32px] mb-6 md:mb-[88px] text-left">
          <div className=" text-2xl md:text-5xl leading-[48px] md:w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>
          {/*  */}
          <div className="md:w-[668px] text-greyscale-90">
            <p>
              Afrostream is a movie and serie streaming service for afrocentric
              content. It is a mix of the traditional movie streaming experience
              and a digitization of the physical cinema experience including
              ticket purchase and limited movie playing periods.
            </p>
            <p className="mt-4 md:mt-[2rem]">
              The product was built to serve across 3 different clients/device
              types: Smart TV, WebApplication and mobile application.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="userResearch flex flex-col md:flex-row gap-2 md:gap-[32px] mb-6 md:mb-[88px] text-left">
          <div className="text-2xl md:text-5xl leading-[48px] font-largescreen-largedisplay font-medium w-[668px]">
            <h2>User Research</h2>
          </div>

          <div className="md:w-[668px] text-greyscale-90">
            <p>
              The interaction design strategy used for Afrostream was the
              rapid-expert (genius design) method.
            </p>
            <p className="mt-4 md:mt-[2rem]">
              As such, only competitive research was done for this project
            </p>

            <p className="text-[12px] mt-[24px] italic md:hidden">
              * I am unable to currently share more insights into the research
              results because of non-disclosure and IP agreements
            </p>
          </div>
        </div>
        {/*  */}
        <div className="analysis flex flex-col md:flex-row gap-[32px] mb-6 md:mb-[88px] text-left font-bold">
          <div className="font-largescreen-largedisplay text-greyscale-40 text-xl md:text-2xl md:w-[668px]">
            <p>Secondary Research/Competitive Analysis</p>
          </div>

          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            className="overflow-x-auto"
          >
            <p className="mb-[16px] text-[24px]">Brands</p>

            <div className="inline-flex gap-[32px] items-start text-[16px]">
              <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                Netflix
              </p>
              <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                Hulu
              </p>
              <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                IrokoTV
              </p>
              <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                AmazonPrime
              </p>
            </div>

            <p className="text-[12px] mt-[24px] italic md:hidden">
              * I am unable to currently share details of this analysis because
              of non-disclosure and IP agreements
            </p>
          </motion.div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default CaseStudy;
