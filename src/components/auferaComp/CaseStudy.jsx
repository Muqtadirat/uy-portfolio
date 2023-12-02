import { motion } from "framer-motion";
import outArrow from "./images/outward-arrow.svg";
import headerImg from "./images/aufera-header.png";
import mobileHeader from "./images/aufera-header-mobile.png";

function CaseStudy() {
  return (
    <div className="caseStudy mx-6 md:mx-[72px]">
      <h1 className="flex mt-[40px] font-black font-largescreen-largedisplay text-left text-4xl md:text-[80px]">
        Aufera (Case Study)
      </h1>
      <p className="flex mt-[16px]">
        <a
          href="http://www.aufera.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-xl md:text-2xl font-bold"
        >
          www.aufera.com <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      {/* Header Image */}

      <div className=" mt-12 md:mt-[120px] mb-10 md:mb-[88px]">
        <img src={headerImg} alt="Aufera header" className="hidden md:block" />
        <img src={mobileHeader} alt="Aufera header" className="md:hidden" />
      </div>

      {/* Overview */}
      <div className="details leading-[24px] md:max-w-full">
        <div className="overview flex flex-col md:flex-row gap-[32px] mb-10 md:mb-[88px] text-left">
          <div className=" text-2xl md:text-5xl leading-[48px] md:w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>
          <div className="md:w-[668px]">
            <p>
              Aufera is community based car rental app that allows people host
              or rent a vehicle to other users of the app using a peer-to-peer
              interaction model. The product was designed as a solution to
              increase access to car rental options in Lagos, Nigeria.
            </p>

            <p className=" mt-4 md:mt-[3rem]">
              My approach to the interaction design of this product was user
              centered design and this helped me focus on a 4-step cycle design
              process of user research, product definition, sketching &
              wireframing, prototyping and user testing.
            </p>
          </div>
        </div>

        {/* User research */}
        <div className="userResearch flex flex-col md:flex-row gap-[32px] mb-10 md:mb-[88px] text-left">
          <div className="text-2xl md:text-5xl leading-[48px] font-largescreen-largedisplay font-medium w-[668px]">
            <h2>User Research</h2>
          </div>

          <div className="md:w-[668px]">
            <ul>
              The product research for Aufera was conducted to
              <li className="list-disc mt-[2rem] ml-12">
                understand the two user groups that would be using this product
                (Renters & Hosts)
              </li>
              <li className="list-disc mt-[2rem] ml-12">
                have a clear idea of the pain points experienced in accessing
                rental vehicles
              </li>
              <li className="list-disc mt-[2rem] ml-12">
                {" "}
                understand what was currently being done and used in the
                industry and how well the available solutions fulfilled user
                needs.
              </li>
            </ul>

            <ul className="mt-[2rem]">
              While I would be discussing the basic research steps done, user
              research was done at various stages of design using the following
              qualitative methods.
              <li className="list-disc mt-[2rem] ml-12">A/B Testing </li>
              <li className="list-disc mt-[2rem] ml-12">
                Desirability studies
              </li>
              <li className="list-disc mt-[2rem] ml-12">
                Moderated usability tests
              </li>
            </ul>

            <p className="text-[12px] mt-[24px] ">
              * I am unable to currently share more insights into the research
              results because of non-disclosure and IP agreements
            </p>
          </div>
        </div>

        {/* Criteria */}
        <div className="criteria flex flex-col md:flex-row gap-[32px] mb-8 md:mb-[88px] text-left font-bold leading-[24px]">
          <div className="font-largescreen-largedisplay text-greyscale-40 text-xl md:text-2xl md:w-[668px]">
            <p>Recruitment Criteria</p>
          </div>

          {/* Horizontal scroll */}
          <motion.div
            className="wrapper w-full md:w-[668px] overflow-x-auto"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
          >
            <div className="renter ">
              <p className="mb-[16px] text-xl md:text-2xl">Renters</p>

              <div className="flex gap-3 md:gap-[32px] items-start md:text-[16px] md:mb-[64px]">
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    Aged 18 - 58
                  </span>
                </p>

                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    Has a valid driver's license
                  </span>
                </p>

                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    Has a valid ID
                  </span>
                </p>
              </div>
            </div>

            <div className="host mt-5 md:mt-0">
              <p className="mb-[16px] text-xl md:text-2xl">Host</p>

              <div className="inline-flex gap-[32px] items-start md:text-[16px]">
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    Aged 18 - 58
                  </span>
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    Own's at least one car
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recruitment questions */}
        <div className="questions flex flex-col md:flex-row gap-[32px] mb-[96px] text-left font-bold leading-[24px]">
          <div className="font-largescreen-largedisplay text-greyscale-40 text-xl md:text-2xl md:w-[668px]">
            <div>
              <p>Recruitment Questions</p>
            </div>
          </div>

          <motion.div
            className="wrapper w-full md:w-[668px] overflow-x-auto"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
          >
            <div className="renter">
              <div>
                <p className="mb-[16px] text-xl md:text-2xl">Renters</p>
              </div>

              <div className="flex md:flex-col gap-3 md:gap-[32px] items-start md:text-[16px] md:mb-[64px]">
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    How do you move around Lagos?
                  </span>
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    What do you love about moving around Lagos?
                  </span>
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    What do you dislike about moving around Lagos?
                  </span>
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    How would you prefer to move around?
                  </span>
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    Have you ever rented a car, If yes how was your experience?
                  </span>
                </p>
              </div>
            </div>

            <div className="host mt-5 md:mt-0">
              <div>
                <p className="mb-[16px] text-xl md:text-2xl">Hosts</p>
              </div>

              <div className="flex md:flex-col gap-[32px] items-start text-[16px]">
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    How do you move around Lagos?
                  </span>
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    If yes, how do you rent your car?
                  </span>
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    What are your favorite things about renting your car out?
                  </span>
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  <span className="inline-block text-center min-w-max md:min-w-[auto]">
                    What are your least favorite things about renting your car
                    out?
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
